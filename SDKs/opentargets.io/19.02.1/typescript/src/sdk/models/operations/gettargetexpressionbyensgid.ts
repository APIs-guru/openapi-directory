import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTargetExpressionByEnsgidQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=gene" })
  gene: string;
}


export class GetTargetExpressionByEnsgidRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTargetExpressionByEnsgidQueryParams;
}


export class GetTargetExpressionByEnsgidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

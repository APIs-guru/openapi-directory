import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetExpressionByEnsgidQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gene" })
  gene: string;
}


export class GetTargetExpressionByEnsgidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTargetExpressionByEnsgidQueryParams;
}


export class GetTargetExpressionByEnsgidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRelationByEnsgidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=target" })
  target: string;
}


export class GetRelationByEnsgidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRelationByEnsgidPathParams;
}


export class GetRelationByEnsgidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

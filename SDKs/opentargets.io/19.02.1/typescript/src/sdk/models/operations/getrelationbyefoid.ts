import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRelationByEfoidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=disease" })
  disease: string;
}


export class GetRelationByEfoidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRelationByEfoidPathParams;
}


export class GetRelationByEfoidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

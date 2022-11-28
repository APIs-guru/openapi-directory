import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRelationByEfoidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=disease" })
  disease: string;
}


export class GetRelationByEfoidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRelationByEfoidPathParams;
}


export class GetRelationByEfoidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

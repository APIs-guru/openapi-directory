import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRelationByEnsgidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target" })
  target: string;
}


export class GetRelationByEnsgidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRelationByEnsgidPathParams;
}


export class GetRelationByEnsgidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

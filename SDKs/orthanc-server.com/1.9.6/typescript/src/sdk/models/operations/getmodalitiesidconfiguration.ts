import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetModalitiesIdConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetModalitiesIdConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetModalitiesIdConfigurationPathParams;
}


export class GetModalitiesIdConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getModalitiesIdConfiguration200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

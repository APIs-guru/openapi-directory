import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetModalitiesIdConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetModalitiesIdConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetModalitiesIdConfigurationPathParams;
}


export class GetModalitiesIdConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getModalitiesIdConfiguration200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}

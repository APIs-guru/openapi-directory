import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDashboardConfigurationPageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class GetDashboardConfigurationPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDashboardConfigurationPageQueryParams;
}


export class GetDashboardConfigurationPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDashboardConfigurationPage200ApplicationXJavascriptBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getDashboardConfigurationPage200TextHtmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDashboardConfigurationPageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class GetDashboardConfigurationPageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDashboardConfigurationPageQueryParams;
}


export class GetDashboardConfigurationPageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDashboardConfigurationPage200ApplicationXJavascriptBinaryString?: Uint8Array;

  @Metadata()
  getDashboardConfigurationPage200TextHtmlBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}

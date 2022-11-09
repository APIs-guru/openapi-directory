import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConfigurationPagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=enableInMainMenu" })
  enableInMainMenu?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageType" })
  pageType?: shared.ConfigurationPageTypeEnum;
}


export class GetConfigurationPagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConfigurationPagesQueryParams;
}


export class GetConfigurationPagesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ConfigurationPageInfo })
  configurationPageInfos?: shared.ConfigurationPageInfo[];

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConfigurationPagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableInMainMenu" })
  enableInMainMenu?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageType" })
  pageType?: shared.ConfigurationPageTypeEnum;
}


export class GetConfigurationPagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConfigurationPagesQueryParams;
}


export class GetConfigurationPagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ConfigurationPageInfo })
  configurationPageInfos?: shared.ConfigurationPageInfo[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}

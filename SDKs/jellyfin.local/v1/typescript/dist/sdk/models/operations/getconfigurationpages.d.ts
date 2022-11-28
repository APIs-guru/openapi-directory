import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConfigurationPagesQueryParams extends SpeakeasyBase {
    enableInMainMenu?: boolean;
    pageType?: shared.ConfigurationPageTypeEnum;
}
export declare class GetConfigurationPagesRequest extends SpeakeasyBase {
    queryParams: GetConfigurationPagesQueryParams;
}
export declare class GetConfigurationPagesResponse extends SpeakeasyBase {
    configurationPageInfos?: shared.ConfigurationPageInfo[];
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}

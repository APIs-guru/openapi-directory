import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceContentFilteringPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum {
    TopSites = "topSites"
,    FullList = "fullList"
}


export class UpdateNetworkApplianceContentFilteringRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedUrlPatterns" })
  allowedUrlPatterns?: string[];

  @Metadata({ data: "json, name=blockedUrlCategories" })
  blockedUrlCategories?: string[];

  @Metadata({ data: "json, name=blockedUrlPatterns" })
  blockedUrlPatterns?: string[];

  @Metadata({ data: "json, name=urlCategoryListSize" })
  urlCategoryListSize?: UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum;
}


export class UpdateNetworkApplianceContentFilteringRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceContentFilteringPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceContentFilteringRequestBody;
}


export class UpdateNetworkApplianceContentFilteringResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceContentFiltering200ApplicationJsonObject?: Map<string, any>;
}

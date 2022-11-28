import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceContentFilteringPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum {
    TopSites = "topSites",
    FullList = "fullList"
}


export class UpdateNetworkApplianceContentFilteringRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedUrlPatterns" })
  allowedUrlPatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=blockedUrlCategories" })
  blockedUrlCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=blockedUrlPatterns" })
  blockedUrlPatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=urlCategoryListSize" })
  urlCategoryListSize?: UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum;
}


export class UpdateNetworkApplianceContentFilteringRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceContentFilteringPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceContentFilteringRequestBody;
}


export class UpdateNetworkApplianceContentFilteringResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceContentFiltering200ApplicationJsonObject?: Map<string, any>;
}

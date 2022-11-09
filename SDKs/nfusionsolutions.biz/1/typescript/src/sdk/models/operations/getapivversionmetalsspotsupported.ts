import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVVersionMetalsSpotSupportedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionMetalsSpotSupportedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetApiVVersionMetalsSpotSupportedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiVVersionMetalsSpotSupportedPathParams;

  @Metadata()
  queryParams: GetApiVVersionMetalsSpotSupportedQueryParams;
}


export class GetApiVVersionMetalsSpotSupportedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getApiVVersionMetalsSpotSupported200ApplicationJsonStrings?: string[];

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}

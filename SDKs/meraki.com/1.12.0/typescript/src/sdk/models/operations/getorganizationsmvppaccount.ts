import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationSmVppAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vppAccountId" })
  vppAccountId: string;
}


export class GetOrganizationSmVppAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationSmVppAccountPathParams;
}


export class GetOrganizationSmVppAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationSmVppAccount200ApplicationJsonObject?: Map<string, any>;
}

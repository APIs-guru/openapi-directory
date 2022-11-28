import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CloneOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CloneOrganizationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class CloneOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloneOrganizationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CloneOrganizationRequestBody;
}


export class CloneOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cloneOrganization201ApplicationJsonObject?: Map<string, any>;
}

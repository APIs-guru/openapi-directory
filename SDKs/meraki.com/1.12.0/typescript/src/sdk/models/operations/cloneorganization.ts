import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CloneOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CloneOrganizationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class CloneOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloneOrganizationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CloneOrganizationRequestBody;
}


export class CloneOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cloneOrganization201ApplicationJsonObject?: Map<string, any>;
}

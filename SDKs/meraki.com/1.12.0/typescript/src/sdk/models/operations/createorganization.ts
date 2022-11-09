import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateOrganizationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class CreateOrganizationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationRequestBody;
}


export class CreateOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createOrganization201ApplicationJsonObject?: Map<string, any>;
}

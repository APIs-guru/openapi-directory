import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetemailinfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class GetemailinfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetemailinfoQueryParams;
}


export class Getemailinfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=Geolocation" })
  geolocation?: string;

  @Metadata({ data: "json, name=Info" })
  info?: string;

  @Metadata({ data: "json, name=IsDisposable" })
  isDisposable?: string;

  @Metadata({ data: "json, name=IsEducational" })
  isEducational?: string;

  @Metadata({ data: "json, name=IsGeneric" })
  isGeneric?: string;

  @Metadata({ data: "json, name=IsGovernment" })
  isGovernment?: string;

  @Metadata({ data: "json, name=IsOrganizational" })
  isOrganizational?: string;

  @Metadata({ data: "json, name=IsVulgar" })
  isVulgar?: string;

  @Metadata({ data: "json, name=Response" })
  response?: string;
}


export class GetemailinfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getemailinfo200ApplicationJsonObject?: Getemailinfo200ApplicationJson;
}

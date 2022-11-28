import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetemailinfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class Getemailinfo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=Geolocation" })
  geolocation?: string;

  @SpeakeasyMetadata({ data: "json, name=Info" })
  info?: string;

  @SpeakeasyMetadata({ data: "json, name=IsDisposable" })
  isDisposable?: string;

  @SpeakeasyMetadata({ data: "json, name=IsEducational" })
  isEducational?: string;

  @SpeakeasyMetadata({ data: "json, name=IsGeneric" })
  isGeneric?: string;

  @SpeakeasyMetadata({ data: "json, name=IsGovernment" })
  isGovernment?: string;

  @SpeakeasyMetadata({ data: "json, name=IsOrganizational" })
  isOrganizational?: string;

  @SpeakeasyMetadata({ data: "json, name=IsVulgar" })
  isVulgar?: string;

  @SpeakeasyMetadata({ data: "json, name=Response" })
  response?: string;
}


export class GetemailinfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetemailinfoQueryParams;
}


export class GetemailinfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getemailinfo200ApplicationJsonObject?: Getemailinfo200ApplicationJson;
}

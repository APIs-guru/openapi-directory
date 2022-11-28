import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AllServiceGroupsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class AllServiceGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: AllServiceGroupsSecurity;
}


export class AllServiceGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Group })
  groups?: shared.Group[];

  @SpeakeasyMetadata()
  statusCode: number;
}

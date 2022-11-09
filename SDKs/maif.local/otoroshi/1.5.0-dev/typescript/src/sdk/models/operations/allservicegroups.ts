import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AllServiceGroupsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class AllServiceGroupsRequest extends SpeakeasyBase {
  @Metadata()
  security: AllServiceGroupsSecurity;
}


export class AllServiceGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Group })
  groups?: shared.Group[];

  @Metadata()
  statusCode: number;
}

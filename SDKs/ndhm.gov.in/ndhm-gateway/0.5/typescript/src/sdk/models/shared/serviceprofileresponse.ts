import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
import { ServiceRoleEnum } from "./serviceroleenum";



export class ServiceProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endpoints", elemType: Endpoint })
  endpoints?: Endpoint[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ServiceRoleEnum;
}

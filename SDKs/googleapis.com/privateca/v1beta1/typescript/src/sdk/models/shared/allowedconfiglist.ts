import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReusableConfigWrapper } from "./reusableconfigwrapper";


export class AllowedConfigList extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedConfigValues", elemType: shared.ReusableConfigWrapper })
  allowedConfigValues?: ReusableConfigWrapper[];
}

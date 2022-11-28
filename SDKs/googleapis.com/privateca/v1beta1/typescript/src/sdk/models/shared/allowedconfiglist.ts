import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReusableConfigWrapper } from "./reusableconfigwrapper";



export class AllowedConfigList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedConfigValues", elemType: ReusableConfigWrapper })
  allowedConfigValues?: ReusableConfigWrapper[];
}

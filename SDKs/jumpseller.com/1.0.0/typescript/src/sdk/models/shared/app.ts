import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppFields } from "./appfields";



export class App extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apps", elemType: AppFields })
  apps?: AppFields[];
}

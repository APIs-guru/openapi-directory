import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppFields } from "./appfields";


export class App extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps", elemType: shared.AppFields })
  apps?: AppFields[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=intention" })
  intention?: string;
}

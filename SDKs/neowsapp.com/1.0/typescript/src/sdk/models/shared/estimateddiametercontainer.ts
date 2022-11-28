import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EstimatedDiameter } from "./estimateddiameter";



export class EstimatedDiameterContainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feet" })
  feet?: EstimatedDiameter;

  @SpeakeasyMetadata({ data: "json, name=kilometers" })
  kilometers?: EstimatedDiameter;

  @SpeakeasyMetadata({ data: "json, name=meters" })
  meters?: EstimatedDiameter;

  @SpeakeasyMetadata({ data: "json, name=miles" })
  miles?: EstimatedDiameter;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EstimatedDiameter } from "./estimateddiameter";
import { EstimatedDiameter } from "./estimateddiameter";
import { EstimatedDiameter } from "./estimateddiameter";
import { EstimatedDiameter } from "./estimateddiameter";


export class EstimatedDiameterContainer extends SpeakeasyBase {
  @Metadata({ data: "json, name=feet" })
  feet?: EstimatedDiameter;

  @Metadata({ data: "json, name=kilometers" })
  kilometers?: EstimatedDiameter;

  @Metadata({ data: "json, name=meters" })
  meters?: EstimatedDiameter;

  @Metadata({ data: "json, name=miles" })
  miles?: EstimatedDiameter;
}

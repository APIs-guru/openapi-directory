import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Algorithm } from "./algorithm";
import { Configuration } from "./configuration";
import { CostMatrix } from "./costmatrix";
import { Objective } from "./objective";
import { JobRelation } from "./jobrelation";
import { GroupRelation } from "./grouprelation";
import { Service } from "./service";
import { Shipment } from "./shipment";
import { VehicleType } from "./vehicletype";
import { Vehicle } from "./vehicle";



export class Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: Algorithm;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: Configuration;

  @SpeakeasyMetadata({ data: "json, name=cost_matrices", elemType: CostMatrix })
  costMatrices?: CostMatrix[];

  @SpeakeasyMetadata({ data: "json, name=objectives", elemType: Objective })
  objectives?: Objective[];

  @SpeakeasyMetadata({ data: "json, name=relations" })
  relations?: any[];

  @SpeakeasyMetadata({ data: "json, name=services", elemType: Service })
  services?: Service[];

  @SpeakeasyMetadata({ data: "json, name=shipments", elemType: Shipment })
  shipments?: Shipment[];

  @SpeakeasyMetadata({ data: "json, name=vehicle_types", elemType: VehicleType })
  vehicleTypes?: VehicleType[];

  @SpeakeasyMetadata({ data: "json, name=vehicles", elemType: Vehicle })
  vehicles?: Vehicle[];
}

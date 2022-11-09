import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: Algorithm;

  @Metadata({ data: "json, name=configuration" })
  configuration?: Configuration;

  @Metadata({ data: "json, name=cost_matrices", elemType: shared.CostMatrix })
  costMatrices?: CostMatrix[];

  @Metadata({ data: "json, name=objectives", elemType: shared.Objective })
  objectives?: Objective[];

  @Metadata({ data: "json, name=relations" })
  relations?: any[];

  @Metadata({ data: "json, name=services", elemType: shared.Service })
  services?: Service[];

  @Metadata({ data: "json, name=shipments", elemType: shared.Shipment })
  shipments?: Shipment[];

  @Metadata({ data: "json, name=vehicle_types", elemType: shared.VehicleType })
  vehicleTypes?: VehicleType[];

  @Metadata({ data: "json, name=vehicles", elemType: shared.Vehicle })
  vehicles?: Vehicle[];
}

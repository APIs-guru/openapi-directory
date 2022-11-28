import { SpeakeasyBase } from "../../../internal/utils";
import { Algorithm } from "./algorithm";
import { Configuration } from "./configuration";
import { CostMatrix } from "./costmatrix";
import { Objective } from "./objective";
import { Service } from "./service";
import { Shipment } from "./shipment";
import { VehicleType } from "./vehicletype";
import { Vehicle } from "./vehicle";
export declare class Request extends SpeakeasyBase {
    algorithm?: Algorithm;
    configuration?: Configuration;
    costMatrices?: CostMatrix[];
    objectives?: Objective[];
    relations?: any[];
    services?: Service[];
    shipments?: Shipment[];
    vehicleTypes?: VehicleType[];
    vehicles?: Vehicle[];
}

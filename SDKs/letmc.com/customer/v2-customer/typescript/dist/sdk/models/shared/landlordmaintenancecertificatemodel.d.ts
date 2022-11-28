import { SpeakeasyBase } from "../../../internal/utils";
import { LettingsLandlordDocument } from "./lettingslandlorddocument";
/**
 * Maintenance Certificate
**/
export declare class LandlordMaintenanceCertificateModel extends SpeakeasyBase {
    due?: Date;
    files?: LettingsLandlordDocument[];
    status?: string;
    type?: string;
}

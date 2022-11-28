import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsRaceEthnicityZip5PathParams extends SpeakeasyBase {
    firstName: string;
    lastName: string;
    zip5Code: string;
}
export declare class UsRaceEthnicityZip5Security extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UsRaceEthnicityZip5Request extends SpeakeasyBase {
    pathParams: UsRaceEthnicityZip5PathParams;
    security: UsRaceEthnicityZip5Security;
}
export declare class UsRaceEthnicityZip5Response extends SpeakeasyBase {
    contentType: string;
    firstLastNameUsRaceEthnicityOut?: shared.FirstLastNameUsRaceEthnicityOut;
    statusCode: number;
}

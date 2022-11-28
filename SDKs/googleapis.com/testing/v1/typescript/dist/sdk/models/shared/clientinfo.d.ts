import { SpeakeasyBase } from "../../../internal/utils";
import { ClientInfoDetail } from "./clientinfodetail";
/**
 * Information about the client which invoked the test.
**/
export declare class ClientInfo extends SpeakeasyBase {
    clientInfoDetails?: ClientInfoDetail[];
    name?: string;
}

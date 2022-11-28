import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key
**/
export declare class WindowsApplication extends SpeakeasyBase {
    displayName?: string;
    displayVersion?: string;
    helpLink?: string;
    installDate?: Date;
    publisher?: string;
}

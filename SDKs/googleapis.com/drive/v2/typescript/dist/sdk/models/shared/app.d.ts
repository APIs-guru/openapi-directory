import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppIcons extends SpeakeasyBase {
    category?: string;
    iconUrl?: string;
    size?: number;
}
/**
 * The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details.
**/
export declare class App extends SpeakeasyBase {
    authorized?: boolean;
    createInFolderTemplate?: string;
    createUrl?: string;
    hasDriveWideScope?: boolean;
    icons?: AppIcons[];
    id?: string;
    installed?: boolean;
    kind?: string;
    longDescription?: string;
    name?: string;
    objectType?: string;
    openUrlTemplate?: string;
    primaryFileExtensions?: string[];
    primaryMimeTypes?: string[];
    productId?: string;
    productUrl?: string;
    secondaryFileExtensions?: string[];
    secondaryMimeTypes?: string[];
    shortDescription?: string;
    supportsCreate?: boolean;
    supportsImport?: boolean;
    supportsMultiOpen?: boolean;
    supportsOfflineCreate?: boolean;
    useByDefault?: boolean;
}

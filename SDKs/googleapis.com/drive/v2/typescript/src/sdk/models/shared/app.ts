import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppIcons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}


// App
/** 
 * The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details.
**/
export class App extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorized" })
  authorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createInFolderTemplate" })
  createInFolderTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=createUrl" })
  createUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=hasDriveWideScope" })
  hasDriveWideScope?: boolean;

  @SpeakeasyMetadata({ data: "json, name=icons", elemType: AppIcons })
  icons?: AppIcons[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=installed" })
  installed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=openUrlTemplate" })
  openUrlTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryFileExtensions" })
  primaryFileExtensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=primaryMimeTypes" })
  primaryMimeTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=productUrl" })
  productUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryFileExtensions" })
  secondaryFileExtensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=secondaryMimeTypes" })
  secondaryMimeTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=supportsCreate" })
  supportsCreate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportsImport" })
  supportsImport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportsMultiOpen" })
  supportsMultiOpen?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportsOfflineCreate" })
  supportsOfflineCreate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useByDefault" })
  useByDefault?: boolean;
}

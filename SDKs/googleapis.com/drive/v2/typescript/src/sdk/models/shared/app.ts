import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppIcons extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;
}


// App
/** 
 * The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details.
**/
export class App extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorized" })
  authorized?: boolean;

  @Metadata({ data: "json, name=createInFolderTemplate" })
  createInFolderTemplate?: string;

  @Metadata({ data: "json, name=createUrl" })
  createUrl?: string;

  @Metadata({ data: "json, name=hasDriveWideScope" })
  hasDriveWideScope?: boolean;

  @Metadata({ data: "json, name=icons", elemType: shared.AppIcons })
  icons?: AppIcons[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=installed" })
  installed?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=openUrlTemplate" })
  openUrlTemplate?: string;

  @Metadata({ data: "json, name=primaryFileExtensions" })
  primaryFileExtensions?: string[];

  @Metadata({ data: "json, name=primaryMimeTypes" })
  primaryMimeTypes?: string[];

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=productUrl" })
  productUrl?: string;

  @Metadata({ data: "json, name=secondaryFileExtensions" })
  secondaryFileExtensions?: string[];

  @Metadata({ data: "json, name=secondaryMimeTypes" })
  secondaryMimeTypes?: string[];

  @Metadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @Metadata({ data: "json, name=supportsCreate" })
  supportsCreate?: boolean;

  @Metadata({ data: "json, name=supportsImport" })
  supportsImport?: boolean;

  @Metadata({ data: "json, name=supportsMultiOpen" })
  supportsMultiOpen?: boolean;

  @Metadata({ data: "json, name=supportsOfflineCreate" })
  supportsOfflineCreate?: boolean;

  @Metadata({ data: "json, name=useByDefault" })
  useByDefault?: boolean;
}

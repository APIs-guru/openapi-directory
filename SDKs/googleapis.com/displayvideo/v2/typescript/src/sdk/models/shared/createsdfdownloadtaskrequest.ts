import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdFilter } from "./idfilter";
import { InventorySourceFilter } from "./inventorysourcefilter";
import { ParentEntityFilter } from "./parententityfilter";


export enum CreateSdfDownloadTaskRequestVersionEnum {
    SdfVersionUnspecified = "SDF_VERSION_UNSPECIFIED",
    SdfVersion31 = "SDF_VERSION_3_1",
    SdfVersion4 = "SDF_VERSION_4",
    SdfVersion41 = "SDF_VERSION_4_1",
    SdfVersion42 = "SDF_VERSION_4_2",
    SdfVersion5 = "SDF_VERSION_5",
    SdfVersion51 = "SDF_VERSION_5_1",
    SdfVersion52 = "SDF_VERSION_5_2",
    SdfVersion53 = "SDF_VERSION_5_3",
    SdfVersion54 = "SDF_VERSION_5_4",
    SdfVersion55 = "SDF_VERSION_5_5"
}


// CreateSdfDownloadTaskRequest
/** 
 * Request message for [SdfDownloadTaskService.CreateSdfDownloadTask].
**/
export class CreateSdfDownloadTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=idFilter" })
  idFilter?: IdFilter;

  @SpeakeasyMetadata({ data: "json, name=inventorySourceFilter" })
  inventorySourceFilter?: InventorySourceFilter;

  @SpeakeasyMetadata({ data: "json, name=parentEntityFilter" })
  parentEntityFilter?: ParentEntityFilter;

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: CreateSdfDownloadTaskRequestVersionEnum;
}

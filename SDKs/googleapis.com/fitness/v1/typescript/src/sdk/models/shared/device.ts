import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeviceTypeEnum {
    Unknown = "unknown"
,    Phone = "phone"
,    Tablet = "tablet"
,    Watch = "watch"
,    ChestStrap = "chestStrap"
,    Scale = "scale"
,    HeadMounted = "headMounted"
,    SmartDisplay = "smartDisplay"
}


// Device
/** 
 * Representation of an integrated device (such as a phone or a wearable) that can hold sensors. Each sensor is exposed as a data source. The main purpose of the device information contained in this class is to identify the hardware of a particular data source. This can be useful in different ways, including: - Distinguishing two similar sensors on different devices (the step counter on two nexus 5 phones, for instance) - Display the source of data to the user (by using the device make / model) - Treat data differently depending on sensor type (accelerometers on a watch may give different patterns than those on a phone) - Build different analysis models for each device/version. 
**/
export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=type" })
  type?: DeviceTypeEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}

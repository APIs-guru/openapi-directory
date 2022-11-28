import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3CompatibleData } from "./awss3compatibledata";
import { AwsS3Data } from "./awss3data";
import { AzureBlobStorageData } from "./azureblobstoragedata";
import { GcsData } from "./gcsdata";
import { HttpData } from "./httpdata";
import { ObjectConditions } from "./objectconditions";
import { PosixFilesystem } from "./posixfilesystem";
import { TransferManifest } from "./transfermanifest";
import { TransferOptions } from "./transferoptions";



// TransferSpec
/** 
 * Configuration for running a transfer.
**/
export class TransferSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsS3CompatibleDataSource" })
  awsS3CompatibleDataSource?: AwsS3CompatibleData;

  @SpeakeasyMetadata({ data: "json, name=awsS3DataSource" })
  awsS3DataSource?: AwsS3Data;

  @SpeakeasyMetadata({ data: "json, name=azureBlobStorageDataSource" })
  azureBlobStorageDataSource?: AzureBlobStorageData;

  @SpeakeasyMetadata({ data: "json, name=gcsDataSink" })
  gcsDataSink?: GcsData;

  @SpeakeasyMetadata({ data: "json, name=gcsDataSource" })
  gcsDataSource?: GcsData;

  @SpeakeasyMetadata({ data: "json, name=gcsIntermediateDataLocation" })
  gcsIntermediateDataLocation?: GcsData;

  @SpeakeasyMetadata({ data: "json, name=httpDataSource" })
  httpDataSource?: HttpData;

  @SpeakeasyMetadata({ data: "json, name=objectConditions" })
  objectConditions?: ObjectConditions;

  @SpeakeasyMetadata({ data: "json, name=posixDataSink" })
  posixDataSink?: PosixFilesystem;

  @SpeakeasyMetadata({ data: "json, name=posixDataSource" })
  posixDataSource?: PosixFilesystem;

  @SpeakeasyMetadata({ data: "json, name=sinkAgentPoolName" })
  sinkAgentPoolName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAgentPoolName" })
  sourceAgentPoolName?: string;

  @SpeakeasyMetadata({ data: "json, name=transferManifest" })
  transferManifest?: TransferManifest;

  @SpeakeasyMetadata({ data: "json, name=transferOptions" })
  transferOptions?: TransferOptions;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsS3CompatibleData } from "./awss3compatibledata";
import { AwsS3Data } from "./awss3data";
import { AzureBlobStorageData } from "./azureblobstoragedata";
import { GcsData } from "./gcsdata";
import { GcsData } from "./gcsdata";
import { GcsData } from "./gcsdata";
import { HttpData } from "./httpdata";
import { ObjectConditions } from "./objectconditions";
import { PosixFilesystem } from "./posixfilesystem";
import { PosixFilesystem } from "./posixfilesystem";
import { TransferManifest } from "./transfermanifest";
import { TransferOptions } from "./transferoptions";


// TransferSpec
/** 
 * Configuration for running a transfer.
**/
export class TransferSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsS3CompatibleDataSource" })
  awsS3CompatibleDataSource?: AwsS3CompatibleData;

  @Metadata({ data: "json, name=awsS3DataSource" })
  awsS3DataSource?: AwsS3Data;

  @Metadata({ data: "json, name=azureBlobStorageDataSource" })
  azureBlobStorageDataSource?: AzureBlobStorageData;

  @Metadata({ data: "json, name=gcsDataSink" })
  gcsDataSink?: GcsData;

  @Metadata({ data: "json, name=gcsDataSource" })
  gcsDataSource?: GcsData;

  @Metadata({ data: "json, name=gcsIntermediateDataLocation" })
  gcsIntermediateDataLocation?: GcsData;

  @Metadata({ data: "json, name=httpDataSource" })
  httpDataSource?: HttpData;

  @Metadata({ data: "json, name=objectConditions" })
  objectConditions?: ObjectConditions;

  @Metadata({ data: "json, name=posixDataSink" })
  posixDataSink?: PosixFilesystem;

  @Metadata({ data: "json, name=posixDataSource" })
  posixDataSource?: PosixFilesystem;

  @Metadata({ data: "json, name=sinkAgentPoolName" })
  sinkAgentPoolName?: string;

  @Metadata({ data: "json, name=sourceAgentPoolName" })
  sourceAgentPoolName?: string;

  @Metadata({ data: "json, name=transferManifest" })
  transferManifest?: TransferManifest;

  @Metadata({ data: "json, name=transferOptions" })
  transferOptions?: TransferOptions;
}

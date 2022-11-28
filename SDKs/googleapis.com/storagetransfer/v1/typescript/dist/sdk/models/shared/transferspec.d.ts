import { SpeakeasyBase } from "../../../internal/utils";
import { AwsS3CompatibleData } from "./awss3compatibledata";
import { AwsS3Data } from "./awss3data";
import { AzureBlobStorageData } from "./azureblobstoragedata";
import { GcsData } from "./gcsdata";
import { HttpData } from "./httpdata";
import { ObjectConditions } from "./objectconditions";
import { PosixFilesystem } from "./posixfilesystem";
import { TransferManifest } from "./transfermanifest";
import { TransferOptions } from "./transferoptions";
/**
 * Configuration for running a transfer.
**/
export declare class TransferSpec extends SpeakeasyBase {
    awsS3CompatibleDataSource?: AwsS3CompatibleData;
    awsS3DataSource?: AwsS3Data;
    azureBlobStorageDataSource?: AzureBlobStorageData;
    gcsDataSink?: GcsData;
    gcsDataSource?: GcsData;
    gcsIntermediateDataLocation?: GcsData;
    httpDataSource?: HttpData;
    objectConditions?: ObjectConditions;
    posixDataSink?: PosixFilesystem;
    posixDataSource?: PosixFilesystem;
    sinkAgentPoolName?: string;
    sourceAgentPoolName?: string;
    transferManifest?: TransferManifest;
    transferOptions?: TransferOptions;
}

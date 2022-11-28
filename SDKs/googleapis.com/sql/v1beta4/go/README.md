# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.SQLBackupRunsDeleteRequest{
        Security: operations.SQLBackupRunsDeleteSecurity{
            Option1: &operations.SQLBackupRunsDeleteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.SQLBackupRunsDeletePathParams{
            ID: "aut",
            Instance: "tempora",
            Project: "incidunt",
        },
        QueryParams: operations.SQLBackupRunsDeleteQueryParams{
            DollarXgafv: "1",
            AccessToken: "minus",
            Alt: "json",
            Callback: "officia",
            Fields: "nesciunt",
            Key: "perferendis",
            OauthToken: "in",
            PrettyPrint: false,
            QuotaUser: "iusto",
            UploadType: "et",
            UploadProtocol: "aperiam",
        },
    }
    
    res, err := s.BackupRuns.SQLBackupRunsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### backupRuns

* `SQLBackupRunsDelete` - Deletes the backup taken by a backup run.
* `SQLBackupRunsGet` - Retrieves a resource containing information about a backup run.
* `SQLBackupRunsInsert` - Creates a new backup run on demand.
* `SQLBackupRunsList` - Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

### connect

* `SQLConnectGenerateEphemeral` - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* `SQLConnectGet` - Retrieves connect settings about a Cloud SQL instance.

### databases

* `SQLDatabasesDelete` - Deletes a database from a Cloud SQL instance.
* `SQLDatabasesGet` - Retrieves a resource containing information about a database inside a Cloud SQL instance.
* `SQLDatabasesInsert` - Inserts a resource containing information about a database inside a Cloud SQL instance.
* `SQLDatabasesList` - Lists databases in the specified Cloud SQL instance.
* `SQLDatabasesPatch` - Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
* `SQLDatabasesUpdate` - Updates a resource containing information about a database inside a Cloud SQL instance.

### flags

* `SQLFlagsList` - Lists all available database flags for Cloud SQL instances.

### instances

* `SQLInstancesAddServerCa` - Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.
* `SQLInstancesClone` - Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
* `SQLInstancesDelete` - Deletes a Cloud SQL instance.
* `SQLInstancesDemoteMaster` - Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
* `SQLInstancesExport` - Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
* `SQLInstancesFailover` - Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
* `SQLInstancesGet` - Retrieves a resource containing information about a Cloud SQL instance.
* `SQLInstancesImport` - Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
* `SQLInstancesInsert` - Creates a new Cloud SQL instance.
* `SQLInstancesList` - Lists instances under a given project.
* `SQLInstancesListServerCas` - Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
* `SQLInstancesPatch` - Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
* `SQLInstancesPromoteReplica` - Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.
* `SQLInstancesResetSslConfig` - Deletes all client certificates and generates a new server SSL certificate for the instance.
* `SQLInstancesRestart` - Restarts a Cloud SQL instance.
* `SQLInstancesRestoreBackup` - Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
* `SQLInstancesRotateServerCa` - Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
* `SQLInstancesStartReplica` - Starts the replication in the read replica instance.
* `SQLInstancesStopReplica` - Stops the replication in the read replica instance.
* `SQLInstancesTruncateLog` - Truncate MySQL general and slow query log tables MySQL only.
* `SQLInstancesUpdate` - Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

### operations

* `SQLOperationsGet` - Retrieves an instance operation that has been performed on an instance.
* `SQLOperationsList` - Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

### projects

* `SQLProjectsInstancesRescheduleMaintenance` - Reschedules the maintenance on the given instance.
* `SQLProjectsInstancesStartExternalSync` - Start External primary instance migration.
* `SQLProjectsInstancesVerifyExternalSyncSettings` - Verify External primary instance external sync settings.

### sslCerts

* `SQLSslCertsCreateEphemeral` - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* `SQLSslCertsDelete` - Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
* `SQLSslCertsGet` - Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
* `SQLSslCertsInsert` - Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
* `SQLSslCertsList` - Lists all of the current SSL certificates for the instance.

### tiers

* `SQLTiersList` - Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).

### users

* `SQLUsersDelete` - Deletes a user from a Cloud SQL instance.
* `SQLUsersGet` - Retrieves a resource containing information about a user.
* `SQLUsersInsert` - Creates a new user in a Cloud SQL instance.
* `SQLUsersList` - Lists users in the specified Cloud SQL instance.
* `SQLUsersUpdate` - Updates an existing user in a Cloud SQL instance.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

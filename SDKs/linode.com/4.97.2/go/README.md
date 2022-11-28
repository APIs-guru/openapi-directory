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
    
    req := operations.GetNodebalancersNodeBalancerIDStatsRequest{
        Security: operations.GetNodebalancersNodeBalancerIDStatsSecurity{
            PersonalAccessToken: &shared.SchemePersonalAccessToken{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        PathParams: operations.GetNodebalancersNodeBalancerIDStatsPathParams{
            NodeBalancerID: 3984540232369756754,
        },
    }
    
    res, err := s.Sdk.GetNodebalancersNodeBalancerIDStats(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.NodeBalancerStats != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `GetNodebalancersNodeBalancerIDStats` - NodeBalancer Statistics View
* `PostImagesUpload` - Image Upload
* `AcceptEntityTransfer` - Entity Transfer Accept
* `AcceptServiceTransfer` - Service Transfer Accept
* `AddLinodeConfig` - Configuration Profile Create
* `AddLinodeDisk` - Disk Create
* `AddLinodeIP` - IPv4 Address Allocate
* `AddSSHKey` - SSH Key Add
* `AddStackScript` - StackScript Create
* `AllocateIP` - IP Address Allocate
* `AssignIPs` - Linodes Assign IPs
* `AttachVolume` - Volume Attach
* `BootLinodeInstance` - Linode Boot
* `CancelAccount` - Account Cancel
* `CancelBackups` - Backups Cancel
* `CancelObjectStorage` - Object Storage Cancel
* `CloneDomain` - Domain Clone
* `CloneLinodeDisk` - Disk Clone
* `CloneLinodeInstance` - Linode Clone
* `CloneVolume` - Volume Clone
* `CloseTicket` - Support Ticket Close
* `CreateClient` - OAuth Client Create
* `CreateCreditCard` - Credit Card Add/Edit
* `CreateDomain` - Domain Create
* `CreateDomainRecord` - Domain Record Create
* `CreateEntityTransfer` - Entity Transfer Create
* `CreateFirewallDevice` - Firewall Device Create
* `CreateFirewalls` - Firewall Create
* `CreateImage` - Image Create
* `CreateLkeCluster` - Kubernetes Cluster Create
* `CreateLinodeInstance` - Linode Create
* `CreateLongviewClient` - Longview Client Create
* `CreateManagedContact` - Managed Contact Create
* `CreateManagedCredential` - Managed Credential Create
* `CreateManagedService` - Managed Service Create
* `CreateNodeBalancer` - NodeBalancer Create
* `CreateNodeBalancerConfig` - Config Create
* `CreateNodeBalancerNode` - Node Create
* `CreateObjectStorageBucket` - Object Storage Bucket Create
* `CreateObjectStorageKeys` - Object Storage Key Create
* `CreateObjectStorageObjectURL` - Object Storage Object URL Create
* `CreateObjectStorageSsl` - Object Storage TLS/SSL Cert Upload
* `CreatePayPalPayment` - PayPal Payment Stage
* `CreatePayment` - Payment Make
* `CreatePaymentMethod` - Payment Method Add
* `CreatePersonalAccessToken` - Personal Access Token Create
* `CreatePromoCredit` - Promo Credit Add
* `CreateServiceTransfer` - Service Transfer Create
* `CreateSnapshot` - Snapshot Create
* `CreateTag` - New Tag Create
* `CreateTicket` - Support Ticket Open
* `CreateTicketAttachment` - Ticket Attachment Create
* `CreateTicketReply` - Reply Create
* `CreateUser` - User Create
* `CreateVolume` - Volume Create
* `DeleteClient` - OAuth Client Delete
* `DeleteDisk` - Disk Delete
* `DeleteDomain` - Domain Delete
* `DeleteDomainRecord` - Domain Record Delete
* `DeleteEntityTransfer` - Entity Transfer Cancel
* `DeleteFirewall` - Firewall Delete
* `DeleteFirewallDevice` - Firewall Device Delete
* `DeleteImage` - Image Delete
* `DeleteLkeCluster` - Kubernetes Cluster Delete
* `DeleteLkeClusterNode` - Node Delete
* `DeleteLkeNodePool` - Node Pool Delete
* `DeleteLinodeConfig` - Configuration Profile Delete
* `DeleteLinodeInstance` - Linode Delete
* `DeleteLongviewClient` - Longview Client Delete
* `DeleteManagedContact` - Managed Contact Delete
* `DeleteManagedCredential` - Managed Credential Delete
* `DeleteManagedService` - Managed Service Delete
* `DeleteNodeBalancer` - NodeBalancer Delete
* `DeleteNodeBalancerConfig` - Config Delete
* `DeleteNodeBalancerConfigNode` - Node Delete
* `DeleteObjectStorageBucket` - Object Storage Bucket Remove
* `DeleteObjectStorageKey` - Object Storage Key Revoke
* `DeleteObjectStorageSsl` - Object Storage TLS/SSL Cert Delete
* `DeletePersonalAccessToken` - Personal Access Token Revoke
* `DeleteProfileApp` - App Access Revoke
* `DeleteSSHKey` - SSH Key Delete
* `DeleteServiceTransfer` - Service Transfer Cancel
* `DeleteStackScript` - StackScript Delete
* `DeleteTag` - Tag Delete
* `DeleteUser` - User Delete
* `DeleteVolume` - Volume Delete
* `DetachVolume` - Volume Detach
* `DisableManagedService` - Managed Service Disable
* `EnableAccountManged` - Linode Managed Enable
* `EnableBackups` - Backups Enable
* `EnableManagedService` - Managed Service Enable
* `EventRead` - Event Mark as Read
* `EventSeen` - Event Mark as Seen
* `ExecutePayPalPayment` - Staged/Approved PayPal Payment Execute
* `GetAccount` - Account View
* `GetAccountLogin` - Login View
* `GetAccountLogins` - User Logins List All
* `GetAccountSettings` - Account Settings View
* `GetBackup` - Backup View
* `GetBackups` - Backups List
* `GetClient` - OAuth Client View
* `GetClientThumbnail` - OAuth Client Thumbnail View
* `GetClients` - OAuth Clients List
* `GetDevices` - Trusted Devices List
* `GetDomain` - Domain View
* `GetDomainRecord` - Domain Record View
* `GetDomainRecords` - Domain Records List
* `GetDomainZone` - Domain Zone File View
* `GetDomains` - Domains List
* `GetEntityTransfer` - Entity Transfer View
* `GetEntityTransfers` - Entity Transfers List
* `GetEvent` - Event View
* `GetEvents` - Events List
* `GetFirewall` - Firewall View
* `GetFirewallDevice` - Firewall Device View
* `GetFirewallDevices` - Firewall Devices List
* `GetFirewallRules` - Firewall Rules List
* `GetFirewalls` - Firewalls List
* `GetIP` - IP Address View
* `GetIPs` - IP Addresses List
* `GetIPv6Pools` - IPv6 Pools List
* `GetIPv6Ranges` - IPv6 Ranges List
* `GetImage` - Image View
* `GetImages` - Images List
* `GetInvoice` - Invoice View
* `GetInvoiceItems` - Invoice Items List
* `GetInvoices` - Invoices List
* `GetKernel` - Kernel View
* `GetKernels` - Kernels List
* `GetLkeCluster` - Kubernetes Cluster View
* `GetLkeClusterAPIEndpoints` - Kubernetes API Endpoints List
* `GetLkeClusterKubeconfig` - Kubeconfig View
* `GetLkeClusterNode` - Node View
* `GetLkeClusterPools` - Node Pools List
* `GetLkeClusters` - Kubernetes Clusters List
* `GetLkeNodePool` - Node Pool View
* `GetLkeVersion` - Kubernetes Version View
* `GetLkeVersions` - Kubernetes Versions List
* `GetLinodeConfig` - Configuration Profile View
* `GetLinodeConfigs` - Configuration Profiles List
* `GetLinodeDisk` - Disk View
* `GetLinodeDisks` - Disks List
* `GetLinodeFirewalls` - Firewalls List
* `GetLinodeIP` - IP Address View
* `GetLinodeIPs` - Networking Information List
* `GetLinodeInstance` - Linode View
* `GetLinodeInstances` - Linodes List
* `GetLinodeStats` - Linode Statistics View
* `GetLinodeStatsByYearMonth` - Statistics View (year/month)
* `GetLinodeTransfer` - Network Transfer View
* `GetLinodeTransferByYearMonth` - Network Transfer View (year/month)
* `GetLinodeType` - Type View
* `GetLinodeTypes` - Types List
* `GetLinodeVolumes` - Linode's Volumes List
* `GetLongviewClient` - Longview Client View
* `GetLongviewClients` - Longview Clients List
* `GetLongviewPlan` - Longview Plan View
* `GetLongviewSubscription` - Longview Subscription View
* `GetLongviewSubscriptions` - Longview Subscriptions List
* `GetMaintenance` - Maintenance List
* `GetManagedContact` - Managed Contact View
* `GetManagedContacts` - Managed Contacts List
* `GetManagedCredential` - Managed Credential View
* `GetManagedCredentials` - Managed Credentials List
* `GetManagedIssue` - Managed Issue View
* `GetManagedIssues` - Managed Issues List
* `GetManagedLinodeSetting` - Linode's Managed Settings View
* `GetManagedLinodeSettings` - Managed Linode Settings List
* `GetManagedService` - Managed Service View
* `GetManagedServices` - Managed Services List
* `GetManagedStats` - Managed Stats List
* `GetNodeBalancer` - NodeBalancer View
* `GetNodeBalancerConfig` - Config View
* `GetNodeBalancerConfigNodes` - Nodes List
* `GetNodeBalancerConfigs` - Configs List
* `GetNodeBalancerNode` - Node View
* `GetNodeBalancers` - NodeBalancers List
* `GetNotifications` - Notifications List
* `GetObjectStorageBucket` - Object Storage Bucket View
* `GetObjectStorageBucketContent` - Object Storage Bucket Contents List
* `GetObjectStorageBucketinCluster` - Object Storage Buckets in Cluster List
* `GetObjectStorageBuckets` - Object Storage Buckets List
* `GetObjectStorageCluster` - Cluster View
* `GetObjectStorageClusters` - Clusters List
* `GetObjectStorageKey` - Object Storage Key View
* `GetObjectStorageKeys` - Object Storage Keys List
* `GetObjectStorageSsl` - Object Storage TLS/SSL Cert View
* `GetObjectStorageTransfer` - Object Storage Transfer View
* `GetPayment` - Payment View
* `GetPaymentMethods` - Payment Methods List
* `GetPayments` - Payments List
* `GetPersonalAccessToken` - Personal Access Token View
* `GetPersonalAccessTokens` - Personal Access Tokens List
* `GetProfile` - Profile View
* `GetProfileApp` - Authorized App View
* `GetProfileApps` - Authorized Apps List
* `GetProfileGrants` - Grants List
* `GetProfileLogin` - Login View
* `GetProfileLogins` - Logins List
* `GetRegion` - Region View
* `GetRegions` - Regions List
* `GetSSHKey` - SSH Key View
* `GetSSHKeys` - SSH Keys List
* `GetServiceTransfer` - Service Transfer View
* `GetServiceTransfers` - Service Transfers List
* `GetStackScript` - StackScript View
* `GetStackScripts` - StackScripts List
* `GetTaggedObjects` - Tagged Objects List
* `GetTags` - Tags List
* `GetTicket` - Support Ticket View
* `GetTicketReplies` - Replies List
* `GetTickets` - Support Tickets List
* `GetTransfer` - Network Utilization View
* `GetTrustedDevice` - Trusted Device View
* `GetUser` - User View
* `GetUserGrants` - User's Grants View
* `GetUserPreferences` - User Preferences View
* `GetUsers` - Users List
* `GetVlaNs` - VLANs List
* `GetVolume` - Volume View
* `GetVolumes` - Volumes List
* `ImportDomain` - Domain Import
* `MigrateLinodeInstance` - DC Migration/Pending Host Migration Initiate
* `ModifyObjectStorageBucketAccess` - Object Storage Bucket Access Modify
* `MutateLinodeInstance` - Linode Upgrade
* `PostLkeClusterNodeRecycle` - Node Recycle
* `PostLkeClusterPoolRecycle` - Node Pool Recycle
* `PostLkeClusterPools` - Node Pool Create
* `PostLkeClusterRecycle` - Cluster Nodes Recycle
* `PutLkeCluster` - Kubernetes Cluster Update
* `PutLkeNodePool` - Node Pool Update
* `RebootLinodeInstance` - Linode Reboot
* `RebuildLinodeInstance` - Linode Rebuild
* `RebuildNodeBalancerConfig` - Config Rebuild
* `RemoveLinodeIP` - IPv4 Address Delete
* `RescueLinodeInstance` - Linode Boot into Rescue Mode
* `ResetClientSecret` - OAuth Client Secret Reset
* `ResetDiskPassword` - Disk Root Password Reset
* `ResetLinodePassword` - Linode Root Password Reset
* `ResizeDisk` - Disk Resize
* `ResizeLinodeInstance` - Linode Resize
* `ResizeVolume` - Volume Resize
* `RestoreBackup` - Backup Restore
* `RevokeTrustedDevice` - Trusted Device Revoke
* `SetClientThumbnail` - OAuth Client Thumbnail Update
* `ShareIPs` - IP Sharing Configure
* `ShutdownLinodeInstance` - Linode Shut Down
* `TfaConfirm` - Two Factor Authentication Confirm/Enable
* `TfaDisable` - Two Factor Authentication Disable
* `TfaEnable` - Two Factor Secret Create
* `UpdateAccount` - Account Update
* `UpdateAccountSettings` - Account Settings Update
* `UpdateClient` - OAuth Client Update
* `UpdateDisk` - Disk Update
* `UpdateDomain` - Domain Update
* `UpdateDomainRecord` - Domain Record Update
* `UpdateFirewall` - Firewall Update
* `UpdateFirewallRules` - Firewall Rules Update
* `UpdateIP` - IP Address RDNS Update
* `UpdateImage` - Image Update
* `UpdateLinodeConfig` - Configuration Profile Update
* `UpdateLinodeIP` - IP Address Update
* `UpdateLinodeInstance` - Linode Update
* `UpdateLongviewClient` - Longview Client Update
* `UpdateLongviewPlan` - Longview Plan Update
* `UpdateManagedContact` - Managed Contact Update
* `UpdateManagedCredential` - Managed Credential Update
* `UpdateManagedCredentialUsernamePassword` - Managed Credential Username and Password Update
* `UpdateManagedLinodeSetting` - Linode's Managed Settings Update
* `UpdateManagedService` - Managed Service Update
* `UpdateNodeBalancer` - NodeBalancer Update
* `UpdateNodeBalancerConfig` - Config Update
* `UpdateNodeBalancerNode` - Node Update
* `UpdateObjectStorageBucketACL` - Object Storage Object ACL Config Update
* `UpdateObjectStorageBucketAccess` - Object Storage Bucket Access Update
* `UpdateObjectStorageKey` - Object Storage Key Update
* `UpdatePersonalAccessToken` - Personal Access Token Update
* `UpdateProfile` - Profile Update
* `UpdateSSHKey` - SSH Key Update
* `UpdateStackScript` - StackScript Update
* `UpdateUser` - User Update
* `UpdateUserGrants` - User's Grants Update
* `UpdateUserPreferences` - User Preferences Update
* `UpdateVolume` - Volume Update
* `ViewManagedSSHKey` - Managed SSH Key View
* `ViewObjectStorageBucketACL` - Object Storage Object ACL Config View

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

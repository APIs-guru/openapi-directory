# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { GetNodebalancersNodeBalancerIdStatsRequest, GetNodebalancersNodeBalancerIdStatsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetNodebalancersNodeBalancerIdStatsRequest = {
  security: {
    personalAccessToken: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  pathParams: {
    nodeBalancerId: 3984540232369756754,
  },
};

sdk.sdk.getNodebalancersNodeBalancerIdStats(req).then((res: GetNodebalancersNodeBalancerIdStatsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getNodebalancersNodeBalancerIdStats` - NodeBalancer Statistics View
* `postImagesUpload` - Image Upload
* `acceptEntityTransfer` - Entity Transfer Accept
* `acceptServiceTransfer` - Service Transfer Accept
* `addLinodeConfig` - Configuration Profile Create
* `addLinodeDisk` - Disk Create
* `addLinodeIp` - IPv4 Address Allocate
* `addSshKey` - SSH Key Add
* `addStackScript` - StackScript Create
* `allocateIp` - IP Address Allocate
* `assignIPs` - Linodes Assign IPs
* `attachVolume` - Volume Attach
* `bootLinodeInstance` - Linode Boot
* `cancelAccount` - Account Cancel
* `cancelBackups` - Backups Cancel
* `cancelObjectStorage` - Object Storage Cancel
* `cloneDomain` - Domain Clone
* `cloneLinodeDisk` - Disk Clone
* `cloneLinodeInstance` - Linode Clone
* `cloneVolume` - Volume Clone
* `closeTicket` - Support Ticket Close
* `createClient` - OAuth Client Create
* `createCreditCard` - Credit Card Add/Edit
* `createDomain` - Domain Create
* `createDomainRecord` - Domain Record Create
* `createEntityTransfer` - Entity Transfer Create
* `createFirewallDevice` - Firewall Device Create
* `createFirewalls` - Firewall Create
* `createImage` - Image Create
* `createLkeCluster` - Kubernetes Cluster Create
* `createLinodeInstance` - Linode Create
* `createLongviewClient` - Longview Client Create
* `createManagedContact` - Managed Contact Create
* `createManagedCredential` - Managed Credential Create
* `createManagedService` - Managed Service Create
* `createNodeBalancer` - NodeBalancer Create
* `createNodeBalancerConfig` - Config Create
* `createNodeBalancerNode` - Node Create
* `createObjectStorageBucket` - Object Storage Bucket Create
* `createObjectStorageKeys` - Object Storage Key Create
* `createObjectStorageObjectUrl` - Object Storage Object URL Create
* `createObjectStorageSsl` - Object Storage TLS/SSL Cert Upload
* `createPayPalPayment` - PayPal Payment Stage
* `createPayment` - Payment Make
* `createPaymentMethod` - Payment Method Add
* `createPersonalAccessToken` - Personal Access Token Create
* `createPromoCredit` - Promo Credit Add
* `createServiceTransfer` - Service Transfer Create
* `createSnapshot` - Snapshot Create
* `createTag` - New Tag Create
* `createTicket` - Support Ticket Open
* `createTicketAttachment` - Ticket Attachment Create
* `createTicketReply` - Reply Create
* `createUser` - User Create
* `createVolume` - Volume Create
* `deleteClient` - OAuth Client Delete
* `deleteDisk` - Disk Delete
* `deleteDomain` - Domain Delete
* `deleteDomainRecord` - Domain Record Delete
* `deleteEntityTransfer` - Entity Transfer Cancel
* `deleteFirewall` - Firewall Delete
* `deleteFirewallDevice` - Firewall Device Delete
* `deleteImage` - Image Delete
* `deleteLkeCluster` - Kubernetes Cluster Delete
* `deleteLkeClusterNode` - Node Delete
* `deleteLkeNodePool` - Node Pool Delete
* `deleteLinodeConfig` - Configuration Profile Delete
* `deleteLinodeInstance` - Linode Delete
* `deleteLongviewClient` - Longview Client Delete
* `deleteManagedContact` - Managed Contact Delete
* `deleteManagedCredential` - Managed Credential Delete
* `deleteManagedService` - Managed Service Delete
* `deleteNodeBalancer` - NodeBalancer Delete
* `deleteNodeBalancerConfig` - Config Delete
* `deleteNodeBalancerConfigNode` - Node Delete
* `deleteObjectStorageBucket` - Object Storage Bucket Remove
* `deleteObjectStorageKey` - Object Storage Key Revoke
* `deleteObjectStorageSsl` - Object Storage TLS/SSL Cert Delete
* `deletePersonalAccessToken` - Personal Access Token Revoke
* `deleteProfileApp` - App Access Revoke
* `deleteSshKey` - SSH Key Delete
* `deleteServiceTransfer` - Service Transfer Cancel
* `deleteStackScript` - StackScript Delete
* `deleteTag` - Tag Delete
* `deleteUser` - User Delete
* `deleteVolume` - Volume Delete
* `detachVolume` - Volume Detach
* `disableManagedService` - Managed Service Disable
* `enableAccountManged` - Linode Managed Enable
* `enableBackups` - Backups Enable
* `enableManagedService` - Managed Service Enable
* `eventRead` - Event Mark as Read
* `eventSeen` - Event Mark as Seen
* `executePayPalPayment` - Staged/Approved PayPal Payment Execute
* `getAccount` - Account View
* `getAccountLogin` - Login View
* `getAccountLogins` - User Logins List All
* `getAccountSettings` - Account Settings View
* `getBackup` - Backup View
* `getBackups` - Backups List
* `getClient` - OAuth Client View
* `getClientThumbnail` - OAuth Client Thumbnail View
* `getClients` - OAuth Clients List
* `getDevices` - Trusted Devices List
* `getDomain` - Domain View
* `getDomainRecord` - Domain Record View
* `getDomainRecords` - Domain Records List
* `getDomainZone` - Domain Zone File View
* `getDomains` - Domains List
* `getEntityTransfer` - Entity Transfer View
* `getEntityTransfers` - Entity Transfers List
* `getEvent` - Event View
* `getEvents` - Events List
* `getFirewall` - Firewall View
* `getFirewallDevice` - Firewall Device View
* `getFirewallDevices` - Firewall Devices List
* `getFirewallRules` - Firewall Rules List
* `getFirewalls` - Firewalls List
* `getIp` - IP Address View
* `getIPs` - IP Addresses List
* `getIPv6Pools` - IPv6 Pools List
* `getIPv6Ranges` - IPv6 Ranges List
* `getImage` - Image View
* `getImages` - Images List
* `getInvoice` - Invoice View
* `getInvoiceItems` - Invoice Items List
* `getInvoices` - Invoices List
* `getKernel` - Kernel View
* `getKernels` - Kernels List
* `getLkeCluster` - Kubernetes Cluster View
* `getLkeClusterApiEndpoints` - Kubernetes API Endpoints List
* `getLkeClusterKubeconfig` - Kubeconfig View
* `getLkeClusterNode` - Node View
* `getLkeClusterPools` - Node Pools List
* `getLkeClusters` - Kubernetes Clusters List
* `getLkeNodePool` - Node Pool View
* `getLkeVersion` - Kubernetes Version View
* `getLkeVersions` - Kubernetes Versions List
* `getLinodeConfig` - Configuration Profile View
* `getLinodeConfigs` - Configuration Profiles List
* `getLinodeDisk` - Disk View
* `getLinodeDisks` - Disks List
* `getLinodeFirewalls` - Firewalls List
* `getLinodeIp` - IP Address View
* `getLinodeIPs` - Networking Information List
* `getLinodeInstance` - Linode View
* `getLinodeInstances` - Linodes List
* `getLinodeStats` - Linode Statistics View
* `getLinodeStatsByYearMonth` - Statistics View (year/month)
* `getLinodeTransfer` - Network Transfer View
* `getLinodeTransferByYearMonth` - Network Transfer View (year/month)
* `getLinodeType` - Type View
* `getLinodeTypes` - Types List
* `getLinodeVolumes` - Linode's Volumes List
* `getLongviewClient` - Longview Client View
* `getLongviewClients` - Longview Clients List
* `getLongviewPlan` - Longview Plan View
* `getLongviewSubscription` - Longview Subscription View
* `getLongviewSubscriptions` - Longview Subscriptions List
* `getMaintenance` - Maintenance List
* `getManagedContact` - Managed Contact View
* `getManagedContacts` - Managed Contacts List
* `getManagedCredential` - Managed Credential View
* `getManagedCredentials` - Managed Credentials List
* `getManagedIssue` - Managed Issue View
* `getManagedIssues` - Managed Issues List
* `getManagedLinodeSetting` - Linode's Managed Settings View
* `getManagedLinodeSettings` - Managed Linode Settings List
* `getManagedService` - Managed Service View
* `getManagedServices` - Managed Services List
* `getManagedStats` - Managed Stats List
* `getNodeBalancer` - NodeBalancer View
* `getNodeBalancerConfig` - Config View
* `getNodeBalancerConfigNodes` - Nodes List
* `getNodeBalancerConfigs` - Configs List
* `getNodeBalancerNode` - Node View
* `getNodeBalancers` - NodeBalancers List
* `getNotifications` - Notifications List
* `getObjectStorageBucket` - Object Storage Bucket View
* `getObjectStorageBucketContent` - Object Storage Bucket Contents List
* `getObjectStorageBucketinCluster` - Object Storage Buckets in Cluster List
* `getObjectStorageBuckets` - Object Storage Buckets List
* `getObjectStorageCluster` - Cluster View
* `getObjectStorageClusters` - Clusters List
* `getObjectStorageKey` - Object Storage Key View
* `getObjectStorageKeys` - Object Storage Keys List
* `getObjectStorageSsl` - Object Storage TLS/SSL Cert View
* `getObjectStorageTransfer` - Object Storage Transfer View
* `getPayment` - Payment View
* `getPaymentMethods` - Payment Methods List
* `getPayments` - Payments List
* `getPersonalAccessToken` - Personal Access Token View
* `getPersonalAccessTokens` - Personal Access Tokens List
* `getProfile` - Profile View
* `getProfileApp` - Authorized App View
* `getProfileApps` - Authorized Apps List
* `getProfileGrants` - Grants List
* `getProfileLogin` - Login View
* `getProfileLogins` - Logins List
* `getRegion` - Region View
* `getRegions` - Regions List
* `getSshKey` - SSH Key View
* `getSshKeys` - SSH Keys List
* `getServiceTransfer` - Service Transfer View
* `getServiceTransfers` - Service Transfers List
* `getStackScript` - StackScript View
* `getStackScripts` - StackScripts List
* `getTaggedObjects` - Tagged Objects List
* `getTags` - Tags List
* `getTicket` - Support Ticket View
* `getTicketReplies` - Replies List
* `getTickets` - Support Tickets List
* `getTransfer` - Network Utilization View
* `getTrustedDevice` - Trusted Device View
* `getUser` - User View
* `getUserGrants` - User's Grants View
* `getUserPreferences` - User Preferences View
* `getUsers` - Users List
* `getVlaNs` - VLANs List
* `getVolume` - Volume View
* `getVolumes` - Volumes List
* `importDomain` - Domain Import
* `migrateLinodeInstance` - DC Migration/Pending Host Migration Initiate
* `modifyObjectStorageBucketAccess` - Object Storage Bucket Access Modify
* `mutateLinodeInstance` - Linode Upgrade
* `postLkeClusterNodeRecycle` - Node Recycle
* `postLkeClusterPoolRecycle` - Node Pool Recycle
* `postLkeClusterPools` - Node Pool Create
* `postLkeClusterRecycle` - Cluster Nodes Recycle
* `putLkeCluster` - Kubernetes Cluster Update
* `putLkeNodePool` - Node Pool Update
* `rebootLinodeInstance` - Linode Reboot
* `rebuildLinodeInstance` - Linode Rebuild
* `rebuildNodeBalancerConfig` - Config Rebuild
* `removeLinodeIp` - IPv4 Address Delete
* `rescueLinodeInstance` - Linode Boot into Rescue Mode
* `resetClientSecret` - OAuth Client Secret Reset
* `resetDiskPassword` - Disk Root Password Reset
* `resetLinodePassword` - Linode Root Password Reset
* `resizeDisk` - Disk Resize
* `resizeLinodeInstance` - Linode Resize
* `resizeVolume` - Volume Resize
* `restoreBackup` - Backup Restore
* `revokeTrustedDevice` - Trusted Device Revoke
* `setClientThumbnail` - OAuth Client Thumbnail Update
* `shareIPs` - IP Sharing Configure
* `shutdownLinodeInstance` - Linode Shut Down
* `tfaConfirm` - Two Factor Authentication Confirm/Enable
* `tfaDisable` - Two Factor Authentication Disable
* `tfaEnable` - Two Factor Secret Create
* `updateAccount` - Account Update
* `updateAccountSettings` - Account Settings Update
* `updateClient` - OAuth Client Update
* `updateDisk` - Disk Update
* `updateDomain` - Domain Update
* `updateDomainRecord` - Domain Record Update
* `updateFirewall` - Firewall Update
* `updateFirewallRules` - Firewall Rules Update
* `updateIp` - IP Address RDNS Update
* `updateImage` - Image Update
* `updateLinodeConfig` - Configuration Profile Update
* `updateLinodeIp` - IP Address Update
* `updateLinodeInstance` - Linode Update
* `updateLongviewClient` - Longview Client Update
* `updateLongviewPlan` - Longview Plan Update
* `updateManagedContact` - Managed Contact Update
* `updateManagedCredential` - Managed Credential Update
* `updateManagedCredentialUsernamePassword` - Managed Credential Username and Password Update
* `updateManagedLinodeSetting` - Linode's Managed Settings Update
* `updateManagedService` - Managed Service Update
* `updateNodeBalancer` - NodeBalancer Update
* `updateNodeBalancerConfig` - Config Update
* `updateNodeBalancerNode` - Node Update
* `updateObjectStorageBucketAcl` - Object Storage Object ACL Config Update
* `updateObjectStorageBucketAccess` - Object Storage Bucket Access Update
* `updateObjectStorageKey` - Object Storage Key Update
* `updatePersonalAccessToken` - Personal Access Token Update
* `updateProfile` - Profile Update
* `updateSshKey` - SSH Key Update
* `updateStackScript` - StackScript Update
* `updateUser` - User Update
* `updateUserGrants` - User's Grants Update
* `updateUserPreferences` - User Preferences Update
* `updateVolume` - Volume Update
* `viewManagedSshKey` - Managed SSH Key View
* `viewObjectStorageBucketAcl` - Object Storage Object ACL Config View

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

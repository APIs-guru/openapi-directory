import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.linode.com/v4", "https://api.linode.com/v4beta"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getNodebalancersNodeBalancerIdStats - NodeBalancer Statistics View
     *
     * Returns detailed statistics about the requested NodeBalancer.
     *
    **/
    getNodebalancersNodeBalancerIdStats(req: operations.GetNodebalancersNodeBalancerIdStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNodebalancersNodeBalancerIdStatsResponse>;
    /**
     * postImagesUpload - Image Upload
     *
     * Initiates an Image upload.
     *
     * This endpoint creates a new private Image object and returns it along
     * with the URL to which image data can be uploaded.
     *
     * - Image data must be uploaded within 24 hours of creation or the
     * upload will be cancelled and the image deleted.
     *
     * - Image uploads should be made as an HTTP PUT request to the URL returned in the `upload_to`
     * response parameter, with a `Content-type: application/octet-stream` header included in the
     * request. For example:
     *
     *       curl -v \
     *         -H "Content-Type: application/octet-stream" \
     *         --upload-file example.img.gz \
     *         $UPLOAD_URL \
     *         --progress-bar \
     *         --output /dev/null
     *
     * - Uploaded image data should be compressed in gzip (`.gz`) format. The uncompressed disk should be in raw
     * disk image (`.img`) format. A maximum compressed file size of 5GB is supported for upload at this time.
     *
    **/
    postImagesUpload(req: operations.PostImagesUploadRequest, config?: AxiosRequestConfig): Promise<operations.PostImagesUploadResponse>;
    /**
     * acceptEntityTransfer - Entity Transfer Accept
     *
     * **DEPRECATED**. Please use [Service Transfer Accept](/docs/api/account/#service-transfer-accept).
     *
    **/
    acceptEntityTransfer(req: operations.AcceptEntityTransferRequest, config?: AxiosRequestConfig): Promise<operations.AcceptEntityTransferResponse>;
    /**
     * acceptServiceTransfer - Service Transfer Accept
     *
     * Accept a Service Transfer for the provided token to receive the services included in the transfer to your
     * account. At this time, only Linodes can be transferred.
     *
     * When accepted, email confirmations are sent to the accounts that created and accepted the transfer. A transfer
     * can take up to three hours to complete once accepted. Once a transfer is completed, billing for transferred
     * services ends for the sending account and begins for the receiving account.
     *
     * This command can only be accessed by the unrestricted users of the account that receives the transfer. Users
     * of the same account that created a transfer cannot accept the transfer.
     *
     * There are several conditions that must be met in order to accept a transfer request:
     *
     * 1. Only transfers with a `pending` status can be accepted.
     *
     * 1. The account accepting the transfer must have a registered payment method and must not have a past due
     *   balance or other account limitations for the services to be transferred.
     *
     * 1. Both the account that created the transfer and the account that is accepting the transfer must not have any
     * active Terms of Service violations.
     *
     * 1. The service must still be owned by the account that created the transfer.
     *
     * 1. Linodes must not:
     *
     *     * be assigned to a NodeBalancer, Firewall, VLAN, or Managed Service.
     *
     *     * have any attached Block Storage Volumes.
     *
     *     * have any shared IP addresses.
     *
     *     * have any assigned /56, /64, or /116 IPv6 ranges.
     *
     * Any and all of the above conditions must be cured and maintained by the relevant account prior to the
     * transfer's expiration to allow the transfer to be accepted by the receiving account.
     *
    **/
    acceptServiceTransfer(req: operations.AcceptServiceTransferRequest, config?: AxiosRequestConfig): Promise<operations.AcceptServiceTransferResponse>;
    /**
     * addLinodeConfig - Configuration Profile Create
     *
     * Adds a new Configuration profile to a Linode.
     *
    **/
    addLinodeConfig(req: operations.AddLinodeConfigRequest, config?: AxiosRequestConfig): Promise<operations.AddLinodeConfigResponse>;
    /**
     * addLinodeDisk - Disk Create
     *
     * Adds a new Disk to a Linode. You can optionally create a Disk
     * from an Image (see [/images](/docs/api/images/#images-list) for a list of available public images,
     * or use one of your own), and optionally provide a StackScript to deploy
     * with this Disk.
     *
     * The default filesystem for new Disks is `ext4`. If creating a Disk from an Image, the filesystem
     * of the Image is used unless otherwise specified.
     *
    **/
    addLinodeDisk(req: operations.AddLinodeDiskRequest, config?: AxiosRequestConfig): Promise<operations.AddLinodeDiskResponse>;
    /**
     * addLinodeIp - IPv4 Address Allocate
     *
     * Allocates a public or private IPv4 address to a Linode. Public IP Addresses, after the one included with each Linode, incur an additional monthly charge. If you need an additional public IP Address you must request one - please [open a support ticket](/docs/api/support/#support-ticket-open). You may not add more than one private IPv4 address to a single Linode.
     *
    **/
    addLinodeIp(req: operations.AddLinodeIpRequest, config?: AxiosRequestConfig): Promise<operations.AddLinodeIpResponse>;
    /**
     * addSshKey - SSH Key Add
     *
     * Adds an SSH Key to your Account profile.
     *
    **/
    addSshKey(req: operations.AddSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.AddSshKeyResponse>;
    /**
     * addStackScript - StackScript Create
     *
     * Creates a StackScript in your Account.
     *
    **/
    addStackScript(req: operations.AddStackScriptRequest, config?: AxiosRequestConfig): Promise<operations.AddStackScriptResponse>;
    /**
     * allocateIp - IP Address Allocate
     *
     * Allocates a new IPv4 Address on your Account. The Linode must be configured to support additional addresses - please [open a support ticket](/docs/api/support/#support-ticket-open) requesting additional addresses before attempting allocation.
     *
    **/
    allocateIp(req: operations.AllocateIpRequest, config?: AxiosRequestConfig): Promise<operations.AllocateIpResponse>;
    /**
     * assignIPs - Linodes Assign IPs
     *
     * Assign multiple IPs to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPv4 Addresses to your Linodes.  When the assignment is finished, all Linodes must end up with at least one public IPv4 and no more than one private IPv4.
     *
    **/
    assignIPs(req: operations.AssignIPsRequest, config?: AxiosRequestConfig): Promise<operations.AssignIPsResponse>;
    /**
     * attachVolume - Volume Attach
     *
     * Attaches a Volume on your Account to an existing Linode on your Account. In order for this request to complete successfully, your User must have `read_only` or `read_write` permission to the Volume and `read_write` permission to the Linode. Additionally, the Volume and Linode must be located in the same Region.
     *
    **/
    attachVolume(req: operations.AttachVolumeRequest, config?: AxiosRequestConfig): Promise<operations.AttachVolumeResponse>;
    /**
     * bootLinodeInstance - Linode Boot
     *
     * Boots a Linode you have permission to modify. If no parameters are given, a Config profile
     * will be chosen for this boot based on the following criteria:
     *
     * * If there is only one Config profile for this Linode, it will be used.
     * * If there is more than one Config profile, the last booted config will be used.
     * * If there is more than one Config profile and none were the last to be booted (because the
     *   Linode was never booted or the last booted config was deleted) an error will be returned.
     *
    **/
    bootLinodeInstance(req: operations.BootLinodeInstanceRequest, config?: AxiosRequestConfig): Promise<operations.BootLinodeInstanceResponse>;
    /**
     * cancelAccount - Account Cancel
     *
     * Cancels an active Linode account. This action will cause Linode to attempt to charge the credit card on file for the remaining balance. An error will occur if Linode fails to charge the credit card on file. Restricted users will not be able to cancel an account.
     *
    **/
    cancelAccount(req: operations.CancelAccountRequest, config?: AxiosRequestConfig): Promise<operations.CancelAccountResponse>;
    /**
     * cancelBackups - Backups Cancel
     *
     * Cancels the Backup service on the given Linode. Deletes all of this Linode's existing backups forever.
     *
    **/
    cancelBackups(req: operations.CancelBackupsRequest, config?: AxiosRequestConfig): Promise<operations.CancelBackupsResponse>;
    /**
     * cancelObjectStorage - Object Storage Cancel
     *
     * Cancel Object Storage on an Account. All buckets on the Account must be empty
     * before Object Storage can be cancelled:
     *
     * - To delete a smaller number of objects, review the instructions in our
     * [How to Use Object Storage](/docs/platform/object-storage/how-to-use-object-storage/)
     * guide.
     * - To delete large amounts of objects, consult our guide on
     * [Lifecycle Policies](/docs/platform/object-storage/lifecycle-policies/).
     *
    **/
    cancelObjectStorage(req: operations.CancelObjectStorageRequest, config?: AxiosRequestConfig): Promise<operations.CancelObjectStorageResponse>;
    /**
     * cloneDomain - Domain Clone
     *
     * Clones a Domain and all associated DNS records from a Domain that is registered in Linode's DNS manager.
     *
    **/
    cloneDomain(req: operations.CloneDomainRequest, config?: AxiosRequestConfig): Promise<operations.CloneDomainResponse>;
    /**
     * cloneLinodeDisk - Disk Clone
     *
     * Copies a disk, byte-for-byte, into a new Disk belonging to the same Linode. The Linode must have enough storage space available to accept a new Disk of the same size as this one or this operation will fail.
     *
    **/
    cloneLinodeDisk(req: operations.CloneLinodeDiskRequest, config?: AxiosRequestConfig): Promise<operations.CloneLinodeDiskResponse>;
    /**
     * cloneLinodeInstance - Linode Clone
     *
     * You can clone your Linode's existing Disks or Configuration profiles to
     * another Linode on your Account. In order for this request to complete
     * successfully, your User must have the `add_linodes` grant. Cloning to a
     * new Linode will incur a charge on your Account.
     *
     * If cloning to an existing Linode, any actions currently running or
     * queued must be completed first before you can clone to it.
     *
     * Up to five clone operations from any given source Linode can be run concurrently.
     * If more concurrent clones are attempted, an HTTP 400 error will be
     * returned by this endpoint.
     *
     * Any [tags](/docs/api/tags/#tags-list) existing on the source Linode will be cloned to the target Linode.
     *
    **/
    cloneLinodeInstance(req: operations.CloneLinodeInstanceRequest, config?: AxiosRequestConfig): Promise<operations.CloneLinodeInstanceResponse>;
    /**
     * cloneVolume - Volume Clone
     *
     * Creates a Volume on your Account. In order for this request to complete successfully, your User must have the `add_volumes` grant. The new Volume will have the same size and data as the source Volume. Creating a new Volume will incur a charge on your Account.
     *
    **/
    cloneVolume(req: operations.CloneVolumeRequest, config?: AxiosRequestConfig): Promise<operations.CloneVolumeResponse>;
    /**
     * closeTicket - Support Ticket Close
     *
     * Closes a Support Ticket you have access to modify.
     *
    **/
    closeTicket(req: operations.CloseTicketRequest, config?: AxiosRequestConfig): Promise<operations.CloseTicketResponse>;
    /**
     * createClient - OAuth Client Create
     *
     * Creates an OAuth Client, which can be used to allow users (using their Linode account) to log in to your own application, and optionally grant your application some amount of access to their Linodes or other entities.
     *
    **/
    createClient(req: operations.CreateClientRequest, config?: AxiosRequestConfig): Promise<operations.CreateClientResponse>;
    /**
     * createCreditCard - Credit Card Add/Edit
     *
     * **DEPRECATED**. Please use Payment Method Add ([POST /account/payment-methods](/docs/api/account/#payment-method-add)).
     *
     * Adds a credit card Payment Method to your account and sets it as the default method.
     *
    **/
    createCreditCard(req: operations.CreateCreditCardRequest, config?: AxiosRequestConfig): Promise<operations.CreateCreditCardResponse>;
    /**
     * createDomain - Domain Create
     *
     * Adds a new Domain to Linode's DNS Manager. Linode is not a registrar, and you must own the domain before adding it here. Be sure to point your registrar to Linode's nameservers so that the records hosted here are used.
     *
    **/
    createDomain(req: operations.CreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainResponse>;
    /**
     * createDomainRecord - Domain Record Create
     *
     * Adds a new Domain Record to the zonefile this Domain represents.
     *
    **/
    createDomainRecord(req: operations.CreateDomainRecordRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainRecordResponse>;
    /**
     * createEntityTransfer - Entity Transfer Create
     *
     * **DEPRECATED**. Please use [Service Transfer Create](/docs/api/account/#service-transfer-create).
     *
    **/
    createEntityTransfer(req: operations.CreateEntityTransferRequest, config?: AxiosRequestConfig): Promise<operations.CreateEntityTransferResponse>;
    /**
     * createFirewallDevice - Firewall Device Create
     *
     * Creates a Firewall Device, which assigns a Firewall to a Linode service (referred to
     * as the Device's `entity`). Currently, only Devices with an entity of type `linode` are accepted.
     * A Firewall can be assigned a single Linode service at a time. Additional disabled Firewalls can be
     * assigned to a service, but they cannot be enabled if another active Firewall
     * is already assigned to the same service.
     *
     * Creating a Firewall Device will apply the Rules from a Firewall to a Linode service.
     * A `firewall_device_add` Event is generated when the Firewall Device is added successfully.
     *
     * **Note:** When a Firewall is assigned to a Linode and you attempt
     * to [migrate the Linode to a data center](/docs/api/linode-instances/#dc-migrationpending-host-migration-initiate) that does not support Cloud Firewalls, the migration will fail.
     * Use the [List Regions](/docs/api/regions/#regions-list) endpoint to view a list of a data center's capabilities.
     *
     * Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
     *
    **/
    createFirewallDevice(req: operations.CreateFirewallDeviceRequest, config?: AxiosRequestConfig): Promise<operations.CreateFirewallDeviceResponse>;
    /**
     * createFirewalls - Firewall Create
     *
     * Creates a Firewall to filter network traffic. Use the `rules` property to
     * create inbound and outbound access rules. Use the `devices` property to assign the
     * Firewall to a service. Currently, Firewalls can only be assigned to Linode
     * instances.
     *
     * A Firewall can be assigned to multiple Linode instances at a time.
     *
     * A Linode instance can have one active, assigned Firewall at a time.
     * Additional disabled Firewalls can still be added to a Linode instance.
     *
     * A `firewall_create` Event is generated when this endpoint returns successfully.
     *
     * Cloud Firewall is not fully available in every data center region. For the current list
     * of locations with full availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list))
     * endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
     * Certain Regions have partial Firewall availability
     *
    **/
    createFirewalls(req: operations.CreateFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.CreateFirewallsResponse>;
    /**
     * createImage - Image Create
     *
     * Captures a private gold-master Image from a Linode Disk.
     *
     * **Pricing change:** Images will transition to a paid service with a
     * cost of $0.10/GB per month for each manual Custom Image stored on an
     * account. This change will be communicated to customers in advance.
     * Recovery Images, which are generated automatically after a Linode is
     * deleted and available for a finite period of time, are provided at no
     * cost.
     *
    **/
    createImage(req: operations.CreateImageRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageResponse>;
    /**
     * createLkeCluster - Kubernetes Cluster Create
     *
     * Creates a Kubernetes cluster. The Kubernetes cluster will be created
     * asynchronously. You can use the events system to determine when the
     * Kubernetes cluster is ready to use. Please note that it often takes 2-5 minutes before the
     * [Kubernetes API server endpoint](/docs/api/linode-kubernetes-engine-lke/#kubernetes-api-endpoints-list) and
     * the [Kubeconfig file](/docs/api/linode-kubernetes-engine-lke/#kubeconfig-view) for the new cluster
     * are ready.
     *
    **/
    createLkeCluster(req: operations.CreateLkeClusterRequest, config?: AxiosRequestConfig): Promise<operations.CreateLkeClusterResponse>;
    /**
     * createLinodeInstance - Linode Create
     *
     * Creates a Linode Instance on your Account. In order for this
     * request to complete successfully, your User must have the `add_linodes` grant. Creating a
     * new Linode will incur a charge on your Account.
     *
     * Linodes can be created using one of the available Types. See
     * [GET /linode/types](/docs/api/linode-types/#types-list) to get more
     * information about each Type's specs and cost.
     *
     * Linodes can be created in any one of our available
     * [Regions](/docs/api/regions/#regions-list) for a list
     * of available Regions you can deploy your Linode in.
     *
     * In an effort to fight spam, Linode restricts outbound connections on ports 25, 465, and 587
     * on all Linodes for new accounts created after November 5th, 2019. For more information,
     * see [Sending Email on Linode](/docs/email/running-a-mail-server/#sending-email-on-linode).
     *
     * Linodes can be created in a number of ways:
     *
     * * Using a Linode Linux Distribution image or an Image you created based on another Linode.
     *   * The Linode will be `running` after it completes `provisioning`.
     *   * A default config with two Disks, one being a 512 swap disk, is created.
     *     * `swap_size` can be used to customize the swap disk size.
     *   * Requires a `root_pass` be supplied to use for the root User's Account.
     *   * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
     *   * You may also supply a list of usernames via the `authorized_users` field.
     *     * These users must have an SSH Key associated with your Profile first. See [/profile/sshkeys](/docs/api/profile/#ssh-key-add) for more information.
     *
     * * Using a StackScript.
     *   * See [/linode/stackscripts](/docs/api/stackscripts/#stackscripts-list) for
     *     a list of available StackScripts.
     *   * The Linode will be `running` after it completes `provisioning`.
     *   * Requires a compatible Image to be supplied.
     *     * See [/linode/stackscript/{stackscriptId}](/docs/api/stackscripts/#stackscript-view) for compatible Images.
     *   * Requires a `root_pass` be supplied to use for the root User's Account.
     *   * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
     *   * You may also supply a list of usernames via the `authorized_users` field.
     *     * These users must have an SSH Key associated with your Profile first. See [/profile/sshkeys](/docs/api/profile/#ssh-key-add) for more information.
     *
     * * Using one of your other Linode's backups.
     *   * You must create a Linode large enough to accommodate the Backup's size.
     *   * The Disks and Config will match that of the Linode that was backed up.
     *   * The `root_pass` will match that of the Linode that was backed up.
     *
     * * Create an empty Linode.
     *   * The Linode will remain `offline` and must be manually started.
     *     * See [POST /linode/instances/{linodeId}/boot](/docs/api/linode-instances/#linode-boot).
     *   * Disks and Configs must be created manually.
     *   * This is only recommended for advanced use cases.
     *
     *
     * **Important**: You must be an unrestricted User in order to add or modify
     * tags on Linodes.
     *
    **/
    createLinodeInstance(req: operations.CreateLinodeInstanceRequest, config?: AxiosRequestConfig): Promise<operations.CreateLinodeInstanceResponse>;
    /**
     * createLongviewClient - Longview Client Create
     *
     * Creates a Longview Client.  This Client will not begin monitoring the status of your server until you configure the Longview Client application on your Linode using the returning `install_code` and `api_key`.
     *
    **/
    createLongviewClient(req: operations.CreateLongviewClientRequest, config?: AxiosRequestConfig): Promise<operations.CreateLongviewClientResponse>;
    /**
     * createManagedContact - Managed Contact Create
     *
     * Creates a Managed Contact.  A Managed Contact is someone Linode special forces can contact in the course of attempting to resolve an issue with a Managed Service.
     *
    **/
    createManagedContact(req: operations.CreateManagedContactRequest, config?: AxiosRequestConfig): Promise<operations.CreateManagedContactResponse>;
    /**
     * createManagedCredential - Managed Credential Create
     *
     * Creates a Managed Credential. A Managed Credential is stored securely to allow Linode special forces to access your Managed Services and resolve issues.
     *
    **/
    createManagedCredential(req: operations.CreateManagedCredentialRequest, config?: AxiosRequestConfig): Promise<operations.CreateManagedCredentialResponse>;
    /**
     * createManagedService - Managed Service Create
     *
     * Creates a Managed Service. Linode Managed will begin monitoring this service and reporting and attempting to resolve any Issues.
     *
    **/
    createManagedService(req: operations.CreateManagedServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateManagedServiceResponse>;
    /**
     * createNodeBalancer - NodeBalancer Create
     *
     * Creates a NodeBalancer in the requested Region. This NodeBalancer will not start serving requests until it is configured.
     *
    **/
    createNodeBalancer(req: operations.CreateNodeBalancerRequest, config?: AxiosRequestConfig): Promise<operations.CreateNodeBalancerResponse>;
    /**
     * createNodeBalancerConfig - Config Create
     *
     * Creates a NodeBalancer Config, which allows the NodeBalancer to accept traffic on a new port. You will need to add NodeBalancer Nodes to the new Config before it can actually serve requests.
     *
    **/
    createNodeBalancerConfig(req: operations.CreateNodeBalancerConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateNodeBalancerConfigResponse>;
    /**
     * createNodeBalancerNode - Node Create
     *
     * Creates a NodeBalancer Node, a backend that can accept traffic for this NodeBalancer Config. Nodes are routed requests on the configured port based on their status.
     *
    **/
    createNodeBalancerNode(req: operations.CreateNodeBalancerNodeRequest, config?: AxiosRequestConfig): Promise<operations.CreateNodeBalancerNodeResponse>;
    /**
     * createObjectStorageBucket - Object Storage Bucket Create
     *
     * Creates an Object Storage Bucket in the cluster specified. If the
     * bucket already exists and is owned by you, this endpoint will return a
     * `200` response with that bucket as if it had just been created.
     *
     *
     * This endpoint is available for convenience. It is recommended that instead you
     * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket) directly.
     *
    **/
    createObjectStorageBucket(req: operations.CreateObjectStorageBucketRequest, config?: AxiosRequestConfig): Promise<operations.CreateObjectStorageBucketResponse>;
    /**
     * createObjectStorageKeys - Object Storage Key Create
     *
     * Provisions a new Object Storage Key on your account.
     *
     * * To create a Limited Access Key with specific permissions, send a `bucket_access`
     * array.
     *
     * * To create a Limited Access Key without access to any buckets, send an empty
     * `bucket_access` array.
     *
     * * To create an Access Key with unlimited access to all clusters and all buckets,
     * omit the `bucket_access` array.
     *
    **/
    createObjectStorageKeys(req: operations.CreateObjectStorageKeysRequest, config?: AxiosRequestConfig): Promise<operations.CreateObjectStorageKeysResponse>;
    /**
     * createObjectStorageObjectUrl - Object Storage Object URL Create
     *
     * Creates a pre-signed URL to access a single Object in a bucket. This
     * can be used to share objects, and also to create/delete objects by using
     * the appropriate HTTP method in your request body's `method` parameter.
     *
     *
     * This endpoint is available for convenience. It is recommended that instead you
     * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/)
     * directly.
     *
    **/
    createObjectStorageObjectUrl(req: operations.CreateObjectStorageObjectUrlRequest, config?: AxiosRequestConfig): Promise<operations.CreateObjectStorageObjectUrlResponse>;
    /**
     * createObjectStorageSsl - Object Storage TLS/SSL Cert Upload
     *
     * Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.
     * Your TLS/SSL certificate and private key are stored encrypted at rest.
     *
     *
     * To replace an expired certificate, [delete your current certificate](/docs/api/object-storage/#object-storage-tlsssl-cert-delete)
     * and upload a new one.
     *
    **/
    createObjectStorageSsl(req: operations.CreateObjectStorageSslRequest, config?: AxiosRequestConfig): Promise<operations.CreateObjectStorageSslResponse>;
    /**
     * createPayPalPayment - PayPal Payment Stage
     *
     * This begins the process of submitting a Payment via PayPal. After calling this endpoint, you must take the resulting `payment_id` along with the `payer_id` from your PayPal account and [POST /account/payments/paypal-execute](/docs/api/account/#stagedapproved-paypal-payment-execute) to complete the Payment.
     *
    **/
    createPayPalPayment(req: operations.CreatePayPalPaymentRequest, config?: AxiosRequestConfig): Promise<operations.CreatePayPalPaymentResponse>;
    /**
     * createPayment - Payment Make
     *
     * Makes a Payment to your Account via credit card. This will charge your credit card the requested amount.
     *
    **/
    createPayment(req: operations.CreatePaymentRequest, config?: AxiosRequestConfig): Promise<operations.CreatePaymentResponse>;
    /**
     * createPaymentMethod - Payment Method Add
     *
     * Adds a Payment Method to your Account with the option to set it as the default method.
     *
     * Prior to adding a Payment Method, ensure that your billing address information is up-to-date
     * with a valid `zip` by using the Account Update ([PUT /account](/docs/api/account/#account-update)) endpoint.
     *
    **/
    createPaymentMethod(req: operations.CreatePaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.CreatePaymentMethodResponse>;
    /**
     * createPersonalAccessToken - Personal Access Token Create
     *
     * Creates a Personal Access Token for your User. The raw token will be returned in the response, but will never be returned again afterward so be sure to take note of it. You may create a token with _at most_ the scopes of your current token. The created token will be able to access your Account until the given expiry, or until it is revoked.
     *
    **/
    createPersonalAccessToken(req: operations.CreatePersonalAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreatePersonalAccessTokenResponse>;
    /**
     * createPromoCredit - Promo Credit Add
     *
     * Adds an expiring Promo Credit to your account.
     *
     * The following restrictions apply:
     *
     * * Your account must be less than 90 days old.
     * * There must not be an existing Promo Credit already on your account.
     * * The requesting User must be unrestricted. Use the User Update
     *   ([PUT /account/users/{username}](/docs/api/account/#user-update)) to change a User's restricted status.
     * * The `promo_code` must be valid and unexpired.
     *
    **/
    createPromoCredit(req: operations.CreatePromoCreditRequest, config?: AxiosRequestConfig): Promise<operations.CreatePromoCreditResponse>;
    /**
     * createServiceTransfer - Service Transfer Create
     *
     * Creates a transfer request for the specified services. A request can contain any of the specified service types
     * and any number of each service type. At this time, only Linodes can be transferred.
     *
     * When created successfully, a confirmation email is sent to the account that created this transfer containing a
     * transfer token and instructions on completing the transfer.
     *
     * When a transfer is [accepted](/docs/api/account/#service-transfer-accept), the requested services are moved to
     * the receiving account. Linode services will not experience interruptions due to the transfer process. Backups
     * for Linodes are transferred as well.
     *
     * DNS records that are associated with requested services will not be transferred or updated. Please ensure that
     * associated DNS records have been updated or communicated to the recipient prior to the transfer.
     *
     * A transfer can take up to three hours to complete once accepted. When a transfer is
     * completed, billing for transferred services ends for the sending account and begins for the receiving account.
     *
     * This command can only be accessed by the unrestricted users of an account.
     *
     * There are several conditions that must be met in order to successfully create a transfer request:
     *
     * 1. The account creating the transfer must not have a past due balance or active Terms of Service violation.
     *
     * 1. The service must be owned by the account that is creating the transfer.
     *
     * 1. The service must not be assigned to another Service Transfer that is pending or that has been accepted and is
     * incomplete.
     *
     * 1. Linodes must not:
     *
     *     * be assigned to a NodeBalancer, Firewall, VLAN, or Managed Service.
     *
     *     * have any attached Block Storage Volumes.
     *
     *     * have any shared IP addresses.
     *
     *     * have any assigned /56, /64, or /116 IPv6 ranges.
     *
    **/
    createServiceTransfer(req: operations.CreateServiceTransferRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceTransferResponse>;
    /**
     * createSnapshot - Snapshot Create
     *
     * Creates a snapshot Backup of a Linode.
     * ** If you already have a snapshot of this Linode, this is a destructive action. The previous snapshot will be deleted.**
     *
    **/
    createSnapshot(req: operations.CreateSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateSnapshotResponse>;
    /**
     * createTag - New Tag Create
     *
     * Creates a new Tag and optionally tags requested objects with it immediately.
     *
     * **Important**: You must be an unrestricted User in order to add or modify Tags.
     *
    **/
    createTag(req: operations.CreateTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagResponse>;
    /**
     * createTicket - Support Ticket Open
     *
     * Open a Support Ticket.
     * Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.
     *
    **/
    createTicket(req: operations.CreateTicketRequest, config?: AxiosRequestConfig): Promise<operations.CreateTicketResponse>;
    /**
     * createTicketAttachment - Ticket Attachment Create
     *
     * Adds a file attachment to an existing Support Ticket on your Account. File attachments are used to assist our Support team in resolving your Ticket. Examples of attachments are screen shots and text files that provide additional information.
     * Note: Accepted file extensions include: .gif, .jpg, .jpeg, .pjpg, .pjpeg, .tif, .tiff, .png, .pdf, or .txt.
     *
    **/
    createTicketAttachment(req: operations.CreateTicketAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateTicketAttachmentResponse>;
    /**
     * createTicketReply - Reply Create
     *
     * Adds a reply to an existing Support Ticket.
     *
    **/
    createTicketReply(req: operations.CreateTicketReplyRequest, config?: AxiosRequestConfig): Promise<operations.CreateTicketReplyResponse>;
    /**
     * createUser - User Create
     *
     * Creates a User on your Account. Once created, a confirmation message containing password creation and login instructions is sent to the User's email address.
     *
     * The User's account access is determined by whether or not they are restricted, and what grants they have been given.
     *
    **/
    createUser(req: operations.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * createVolume - Volume Create
     *
     * Creates a Volume on your Account. In order for this to complete successfully, your User must have the `add_volumes` grant. Creating a new Volume will start accruing additional charges on your account.
     *
    **/
    createVolume(req: operations.CreateVolumeRequest, config?: AxiosRequestConfig): Promise<operations.CreateVolumeResponse>;
    /**
     * deleteClient - OAuth Client Delete
     *
     * Deletes an OAuth Client registered with Linode. The Client ID and Client secret will no longer be accepted by <a target="_top" href="https://login.linode.com">https://login.linode.com</a>, and all tokens issued to this client will be invalidated (meaning that if your application was using a token, it will no longer work).
     *
    **/
    deleteClient(req: operations.DeleteClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClientResponse>;
    /**
     * deleteDisk - Disk Delete
     *
     * Deletes a Disk you have permission to `read_write`.
     *
     * **Deleting a Disk is a destructive action and cannot be undone.**
     *
    **/
    deleteDisk(req: operations.DeleteDiskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDiskResponse>;
    /**
     * deleteDomain - Domain Delete
     *
     * Deletes a Domain from Linode's DNS Manager. The Domain will be removed from Linode's nameservers shortly after this operation completes. This also deletes all associated Domain Records.
     *
    **/
    deleteDomain(req: operations.DeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainResponse>;
    /**
     * deleteDomainRecord - Domain Record Delete
     *
     * Deletes a Record on this Domain.
     *
    **/
    deleteDomainRecord(req: operations.DeleteDomainRecordRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainRecordResponse>;
    /**
     * deleteEntityTransfer - Entity Transfer Cancel
     *
     * **DEPRECATED**. Please use [Service Transfer Cancel](/docs/api/account/#service-transfer-cancel).
     *
    **/
    deleteEntityTransfer(req: operations.DeleteEntityTransferRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEntityTransferResponse>;
    /**
     * deleteFirewall - Firewall Delete
     *
     * Delete a Firewall resource by its ID. This will remove all of the Firewall's Rules
     * from any Linode services that the Firewall was assigned to.
     *
     * A `firewall_delete` Event is generated when this endpoint returns successfully.
     *
     * Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
     *
    **/
    deleteFirewall(req: operations.DeleteFirewallRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallResponse>;
    /**
     * deleteFirewallDevice - Firewall Device Delete
     *
     * Removes a Firewall Device, which removes a Firewall from the Linode service it was
     * assigned to by the Device. This will remove all of the Firewall's Rules from the Linode
     * service. If any other Firewalls have been assigned to the Linode service, then those Rules
     * will remain in effect.
     *
     * A `firewall_device_remove` Event is generated when the Firewall Device is removed successfully.
     *
     * Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
     *
    **/
    deleteFirewallDevice(req: operations.DeleteFirewallDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallDeviceResponse>;
    /**
     * deleteImage - Image Delete
     *
     * Deletes a private Image you have permission to `read_write`.
     *
     *
     * **Deleting an Image is a destructive action and cannot be undone.**
     *
    **/
    deleteImage(req: operations.DeleteImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageResponse>;
    /**
     * deleteLkeCluster - Kubernetes Cluster Delete
     *
     * Deletes a Cluster you have permission to `read_write`.
     *
     * **Deleting a Cluster is a destructive action and cannot be undone.**
     *
     * Deleting a Cluster:
     *   - Deletes all Linodes in all pools within this Kubernetes cluster
     *   - Deletes all supporting Kubernetes services for this Kubernetes
     *     cluster (API server, etcd, etc)
     *   - Deletes all NodeBalancers created by this Kubernetes cluster
     *   - Does not delete any of the volumes created by this Kubernetes
     *     cluster
     *
    **/
    deleteLkeCluster(req: operations.DeleteLkeClusterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLkeClusterResponse>;
    /**
     * deleteLkeClusterNode - Node Delete
     *
     * Deletes a specific Node from a Node Pool.
     *
     * **Deleting a Node is a destructive action and cannot be undone.**
     *
     * Deleting a Node will reduce the size of the Node Pool it belongs to.
     *
    **/
    deleteLkeClusterNode(req: operations.DeleteLkeClusterNodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLkeClusterNodeResponse>;
    /**
     * deleteLkeNodePool - Node Pool Delete
     *
     * Delete a specific Node Pool from a Kubernetes cluster.
     *
     * **Deleting a Node Pool is a destructive action and cannot be undone.**
     *
     * Deleting a Node Pool will delete all Linodes within that Pool.
     *
    **/
    deleteLkeNodePool(req: operations.DeleteLkeNodePoolRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLkeNodePoolResponse>;
    /**
     * deleteLinodeConfig - Configuration Profile Delete
     *
     * Deletes the specified Configuration profile from the specified Linode.
     *
    **/
    deleteLinodeConfig(req: operations.DeleteLinodeConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLinodeConfigResponse>;
    /**
     * deleteLinodeInstance - Linode Delete
     *
     * Deletes a Linode you have permission to `read_write`.
     *
     * **Deleting a Linode is a destructive action and cannot be undone.**
     *
     * Additionally, deleting a Linode:
     *
     *   * Gives up any IP addresses the Linode was assigned.
     *   * Deletes all Disks, Backups, Configs, etc.
     *   * Stops billing for the Linode and its associated services. You will be billed for time used
     *     within the billing period the Linode was active.
     *
    **/
    deleteLinodeInstance(req: operations.DeleteLinodeInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLinodeInstanceResponse>;
    /**
     * deleteLongviewClient - Longview Client Delete
     *
     * Deletes a Longview Client from your Account.
     *
     * **All information stored for this client will be lost.**
     *
     * This _does not_ uninstall the Longview Client application for your Linode - you must do that manually.
     *
    **/
    deleteLongviewClient(req: operations.DeleteLongviewClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLongviewClientResponse>;
    /**
     * deleteManagedContact - Managed Contact Delete
     *
     * Deletes a Managed Contact.
     *
    **/
    deleteManagedContact(req: operations.DeleteManagedContactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteManagedContactResponse>;
    /**
     * deleteManagedCredential - Managed Credential Delete
     *
     * Deletes a Managed Credential.  Linode special forces will no longer have access to this Credential when attempting to resolve issues.
     *
    **/
    deleteManagedCredential(req: operations.DeleteManagedCredentialRequest, config?: AxiosRequestConfig): Promise<operations.DeleteManagedCredentialResponse>;
    /**
     * deleteManagedService - Managed Service Delete
     *
     * Deletes a Managed Service.  This service will no longer be monitored by Linode Managed.
     *
    **/
    deleteManagedService(req: operations.DeleteManagedServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteManagedServiceResponse>;
    /**
     * deleteNodeBalancer - NodeBalancer Delete
     *
     * Deletes a NodeBalancer.
     *
     * **This is a destructive action and cannot be undone.**
     *
     * Deleting a NodeBalancer will also delete all associated Configs and Nodes, although the backend servers represented by the Nodes will not be changed or removed. Deleting a NodeBalancer will cause you to lose access to the IP Addresses assigned to this NodeBalancer.
     *
    **/
    deleteNodeBalancer(req: operations.DeleteNodeBalancerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNodeBalancerResponse>;
    /**
     * deleteNodeBalancerConfig - Config Delete
     *
     * Deletes the Config for a port of this NodeBalancer.
     *
     * **This cannot be undone.**
     *
     * Once completed, this NodeBalancer will no longer respond to requests on the given port. This also deletes all associated NodeBalancerNodes, but the Linodes they were routing traffic to will be unchanged and will not be removed.
     *
    **/
    deleteNodeBalancerConfig(req: operations.DeleteNodeBalancerConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNodeBalancerConfigResponse>;
    /**
     * deleteNodeBalancerConfigNode - Node Delete
     *
     * Deletes a Node from this Config. This backend will no longer receive traffic for the configured port of this NodeBalancer.
     *
     * This does not change or remove the Linode whose address was used in the creation of this Node.
     *
    **/
    deleteNodeBalancerConfigNode(req: operations.DeleteNodeBalancerConfigNodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNodeBalancerConfigNodeResponse>;
    /**
     * deleteObjectStorageBucket - Object Storage Bucket Remove
     *
     * Removes a single bucket. While buckets containing objects _may_ be deleted by including the `force` option in the request, such operations will fail if the bucket contains too many objects. The recommended way to empty large buckets is to use the [S3 API to configure lifecycle policies](https://docs.ceph.com/en/latest/radosgw/bucketpolicy/#) that remove all objects, then delete the bucket.
     *
     * This endpoint is available for convenience. It is recommended that instead you use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#delete-bucket) directly.
     *
    **/
    deleteObjectStorageBucket(req: operations.DeleteObjectStorageBucketRequest, config?: AxiosRequestConfig): Promise<operations.DeleteObjectStorageBucketResponse>;
    /**
     * deleteObjectStorageKey - Object Storage Key Revoke
     *
     * Revokes an Object Storage Key.  This keypair will no longer be usable by third-party clients.
     *
    **/
    deleteObjectStorageKey(req: operations.DeleteObjectStorageKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteObjectStorageKeyResponse>;
    /**
     * deleteObjectStorageSsl - Object Storage TLS/SSL Cert Delete
     *
     * Deletes this Object Storage bucket's user uploaded TLS/SSL certificate and private key.
     *
    **/
    deleteObjectStorageSsl(req: operations.DeleteObjectStorageSslRequest, config?: AxiosRequestConfig): Promise<operations.DeleteObjectStorageSslResponse>;
    /**
     * deletePersonalAccessToken - Personal Access Token Revoke
     *
     * Revokes a Personal Access Token. The token will be invalidated immediately, and requests using that token will fail with a 401. It is possible to revoke access to the token making the request to revoke a token, but keep in mind that doing so could lose you access to the api and require you to create a new token through some other means.
     *
    **/
    deletePersonalAccessToken(req: operations.DeletePersonalAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeletePersonalAccessTokenResponse>;
    /**
     * deleteProfileApp - App Access Revoke
     *
     * Expires this app token. This token may no longer be used to access your Account.
     *
    **/
    deleteProfileApp(req: operations.DeleteProfileAppRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfileAppResponse>;
    /**
     * deleteSshKey - SSH Key Delete
     *
     * Deletes an SSH Key you have access to.
     *
     * **Note:** deleting an SSH Key will *not* remove it from any Linode or Disk that was deployed with `authorized_keys`. In those cases, the keys must be manually deleted on the Linode or Disk. This endpoint will only delete the key's association from your Profile.
     *
    **/
    deleteSshKey(req: operations.DeleteSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSshKeyResponse>;
    /**
     * deleteServiceTransfer - Service Transfer Cancel
     *
     * Cancels the Service Transfer for the provided token. Once cancelled, a transfer cannot be accepted or otherwise
     * acted on in any way. If cancelled in error, the transfer must be
     * [created](/docs/api/account/#service-transfer-create) again.
     *
     * When cancelled, an email notification for the cancellation is sent to the account that created
     * this transfer. Transfers can not be cancelled if they are expired or have been accepted.
     *
     * This command can only be accessed by the unrestricted users of the account that created this transfer.
     *
    **/
    deleteServiceTransfer(req: operations.DeleteServiceTransferRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceTransferResponse>;
    /**
     * deleteStackScript - StackScript Delete
     *
     * Deletes a private StackScript you have permission to `read_write`. You cannot delete a public StackScript.
     *
    **/
    deleteStackScript(req: operations.DeleteStackScriptRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStackScriptResponse>;
    /**
     * deleteTag - Tag Delete
     *
     * Remove a Tag from all objects and delete it.
     *
     * **Important**: You must be an unrestricted User in order to add or modify Tags.
     *
    **/
    deleteTag(req: operations.DeleteTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagResponse>;
    /**
     * deleteUser - User Delete
     *
     * Deletes a User. The deleted User will be immediately logged out and may no longer log in or perform any actions. All of the User's Grants will be removed.
     *
    **/
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * deleteVolume - Volume Delete
     *
     * Deletes a Volume you have permission to `read_write`.
     *
     * **Deleting a Volume is a destructive action and cannot be undone.**
     *
     * Deleting stops billing for the Volume. You will be billed for time used within
     * the billing period the Volume was active.
     *
    **/
    deleteVolume(req: operations.DeleteVolumeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVolumeResponse>;
    /**
     * detachVolume - Volume Detach
     *
     * Detaches a Volume on your Account from a Linode on your Account. In order for this request to complete successfully, your User must have `read_write` access to the Volume and `read_write` access to the Linode.
     *
    **/
    detachVolume(req: operations.DetachVolumeRequest, config?: AxiosRequestConfig): Promise<operations.DetachVolumeResponse>;
    /**
     * disableManagedService - Managed Service Disable
     *
     * Temporarily disables monitoring of a Managed Service.
     *
    **/
    disableManagedService(req: operations.DisableManagedServiceRequest, config?: AxiosRequestConfig): Promise<operations.DisableManagedServiceResponse>;
    /**
     * enableAccountManged - Linode Managed Enable
     *
     * Enables Linode Managed for the entire account and sends a welcome email to the account's associated email address. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. See our [Linode Managed guide](/docs/platform/linode-managed/) to learn more.
     *
    **/
    enableAccountManged(req: operations.EnableAccountMangedRequest, config?: AxiosRequestConfig): Promise<operations.EnableAccountMangedResponse>;
    /**
     * enableBackups - Backups Enable
     *
     * Enables backups for the specified Linode.
     *
    **/
    enableBackups(req: operations.EnableBackupsRequest, config?: AxiosRequestConfig): Promise<operations.EnableBackupsResponse>;
    /**
     * enableManagedService - Managed Service Enable
     *
     * Enables monitoring of a Managed Service.
     *
    **/
    enableManagedService(req: operations.EnableManagedServiceRequest, config?: AxiosRequestConfig): Promise<operations.EnableManagedServiceResponse>;
    /**
     * eventRead - Event Mark as Read
     *
     * Marks a single Event as read.
    **/
    eventRead(req: operations.EventReadRequest, config?: AxiosRequestConfig): Promise<operations.EventReadResponse>;
    /**
     * eventSeen - Event Mark as Seen
     *
     * Marks all Events up to and including this Event by ID as seen.
     *
    **/
    eventSeen(req: operations.EventSeenRequest, config?: AxiosRequestConfig): Promise<operations.EventSeenResponse>;
    /**
     * executePayPalPayment - Staged/Approved PayPal Payment Execute
     *
     * Given a PaymentID and PayerID - as generated by PayPal during the transaction authorization process - this endpoint executes the Payment to capture the funds and credit your Linode Account.
     *
    **/
    executePayPalPayment(req: operations.ExecutePayPalPaymentRequest, config?: AxiosRequestConfig): Promise<operations.ExecutePayPalPaymentResponse>;
    /**
     * getAccount - Account View
     *
     * Returns the contact and billing information related to your Account.
     *
    **/
    getAccount(req: operations.GetAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    /**
     * getAccountLogin - Login View
     *
     * Returns a Login object that displays information about a successful login. The logins that can be viewed can be for any user on the account, and are not limited to only the logins of the user that is accessing this API endpoint. This command can only be accessed by the unrestricted users of the account.
     *
    **/
    getAccountLogin(req: operations.GetAccountLoginRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountLoginResponse>;
    /**
     * getAccountLogins - User Logins List All
     *
     * Returns a collection of successful logins for all users on the account during the last 90 days. This command can only be accessed by the unrestricted users of an account.
     *
    **/
    getAccountLogins(req: operations.GetAccountLoginsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountLoginsResponse>;
    /**
     * getAccountSettings - Account Settings View
     *
     * Returns information related to your Account settings: Managed service subscription, Longview subscription, and network helper.
     *
    **/
    getAccountSettings(req: operations.GetAccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountSettingsResponse>;
    /**
     * getBackup - Backup View
     *
     * Returns information about a Backup.
     *
    **/
    getBackup(req: operations.GetBackupRequest, config?: AxiosRequestConfig): Promise<operations.GetBackupResponse>;
    /**
     * getBackups - Backups List
     *
     * Returns information about this Linode's available backups.
     *
    **/
    getBackups(req: operations.GetBackupsRequest, config?: AxiosRequestConfig): Promise<operations.GetBackupsResponse>;
    /**
     * getClient - OAuth Client View
     *
     * Returns information about a single OAuth client.
     *
    **/
    getClient(req: operations.GetClientRequest, config?: AxiosRequestConfig): Promise<operations.GetClientResponse>;
    /**
     * getClientThumbnail - OAuth Client Thumbnail View
     *
     * Returns the thumbnail for this OAuth Client.  This is a publicly-viewable endpoint, and can be accessed without authentication.
     *
    **/
    getClientThumbnail(req: operations.GetClientThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.GetClientThumbnailResponse>;
    /**
     * getClients - OAuth Clients List
     *
     * Returns a paginated list of OAuth Clients registered to your Account.  OAuth Clients allow users to log into applications you write or host using their Linode Account, and may allow them to grant some level of access to their Linodes or other entities to your application.
     *
    **/
    getClients(req: operations.GetClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetClientsResponse>;
    /**
     * getDevices - Trusted Devices List
     *
     * Returns a paginated list of active TrustedDevices for your User. Browsers with an active Remember Me Session are logged into your account until the session expires or is revoked.
     *
    **/
    getDevices(req: operations.GetDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicesResponse>;
    /**
     * getDomain - Domain View
     *
     * This is a single Domain that you have registered in Linode's DNS Manager. Linode is not a registrar, and in order for this Domain record to work you must own the domain and point your registrar at Linode's nameservers.
     *
    **/
    getDomain(req: operations.GetDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainResponse>;
    /**
     * getDomainRecord - Domain Record View
     *
     * View a single Record on this Domain.
     *
    **/
    getDomainRecord(req: operations.GetDomainRecordRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainRecordResponse>;
    /**
     * getDomainRecords - Domain Records List
     *
     * Returns a paginated list of Records configured on a Domain in Linode's
     * DNS Manager.
     *
    **/
    getDomainRecords(req: operations.GetDomainRecordsRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainRecordsResponse>;
    /**
     * getDomainZone - Domain Zone File View
     *
     * Returns the zone file for the last rendered zone for the specified domain.
     *
    **/
    getDomainZone(req: operations.GetDomainZoneRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainZoneResponse>;
    /**
     * getDomains - Domains List
     *
     * This is a collection of Domains that you have registered in Linode's DNS Manager.  Linode is not a registrar, and in order for these to work you must own the domains and point your registrar at Linode's nameservers.
     *
    **/
    getDomains(req: operations.GetDomainsRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsResponse>;
    /**
     * getEntityTransfer - Entity Transfer View
     *
     * **DEPRECATED**. Please use [Service Transfer View](/docs/api/account/#service-transfer-view).
     *
    **/
    getEntityTransfer(req: operations.GetEntityTransferRequest, config?: AxiosRequestConfig): Promise<operations.GetEntityTransferResponse>;
    /**
     * getEntityTransfers - Entity Transfers List
     *
     * **DEPRECATED**. Please use [Service Transfers List](/docs/api/account/#service-transfers-list).
     *
    **/
    getEntityTransfers(req: operations.GetEntityTransfersRequest, config?: AxiosRequestConfig): Promise<operations.GetEntityTransfersResponse>;
    /**
     * getEvent - Event View
     *
     * Returns a single Event object.
     *
    **/
    getEvent(req: operations.GetEventRequest, config?: AxiosRequestConfig): Promise<operations.GetEventResponse>;
    /**
     * getEvents - Events List
     *
     * Returns a collection of Event objects representing actions taken on your Account from the last 90 days. The Events returned depend on your grants.
     *
    **/
    getEvents(req: operations.GetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
    /**
     * getFirewall - Firewall View
     *
     * Get a specific Firewall resource by its ID. The Firewall's Devices will not be
     * returned in the response. Instead, use the
     * [List Firewall Devices](/docs/api/networking/#firewall-devices-list)
     * endpoint to review them.
     *
     * Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
     *
    **/
    getFirewall(req: operations.GetFirewallRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallResponse>;
    /**
     * getFirewallDevice - Firewall Device View
     *
     * Returns information for a Firewall Device, which assigns a Firewall
     * to a Linode service (referred to as the Device's `entity`). Currently,
     * only Devices with an entity of type `linode` are accepted.
     *
     * Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
     *
    **/
    getFirewallDevice(req: operations.GetFirewallDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallDeviceResponse>;
    /**
     * getFirewallDevices - Firewall Devices List
     *
     * Returns a paginated list of a Firewall's Devices. A Firewall Device assigns a
     * Firewall to a Linode service (referred to as the Device's `entity`). Currently,
     * only Devices with an entity of type `linode` are accepted.
     *
     * Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
     *
    **/
    getFirewallDevices(req: operations.GetFirewallDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallDevicesResponse>;
    /**
     * getFirewallRules - Firewall Rules List
     *
     * Returns the inbound and outbound Rules for a Firewall.
     *
     * This endpoint is in **beta**.
     *
     *
     * * Gain access to [Linode Cloud Firewall](https://www.linode.com/products/firewall/) by signing up for our [Greenlight Beta program](https://www.linode.com/green-light/#sign-up-form).
     * * During the beta, Cloud Firewall is not available in every [data center region](/docs/api/regions). For the current list of availability, see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
     * * Please make sure to prepend all requests with
     * `/v4beta` instead of `/v4`, and be aware that this endpoint may receive breaking
     * updates in the future.  This notice will be removed when this endpoint is out of
     * beta.
     *
    **/
    getFirewallRules(req: operations.GetFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallRulesResponse>;
    /**
     * getFirewalls - Firewalls List
     *
     * Returns a paginated list of your Firewalls.
     *
     * Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
     *
    **/
    getFirewalls(req: operations.GetFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallsResponse>;
    /**
     * getIp - IP Address View
     *
     * Returns information about a single IP Address on your Account.
     *
    **/
    getIp(req: operations.GetIpRequest, config?: AxiosRequestConfig): Promise<operations.GetIpResponse>;
    /**
     * getIPs - IP Addresses List
     *
     * Returns a paginated list of IP Addresses on your Account, excluding private addresses.
     *
    **/
    getIPs(req: operations.GetIPsRequest, config?: AxiosRequestConfig): Promise<operations.GetIPsResponse>;
    /**
     * getIPv6Pools - IPv6 Pools List
     *
     * Displays the IPv6 pools on your Account. A pool of IPv6 addresses are routed to all of your Linodes in a single [Region](/docs/api/regions/#regions-list). Any Linode on your Account may bring up any address in this pool at any time, with no external configuration required.
     *
    **/
    getIPv6Pools(req: operations.GetIPv6PoolsRequest, config?: AxiosRequestConfig): Promise<operations.GetIPv6PoolsResponse>;
    /**
     * getIPv6Ranges - IPv6 Ranges List
     *
     * Displays the IPv6 ranges on your Account.
     *
     *
     *   * An IPv6 range is a `/64` block of IPv6 addresses routed to a single Linode in a given [Region](/docs/api/regions/#regions-list).
     *
     *   * Your Linode is responsible for routing individual addresses in the range, or handling traffic for all the addresses in the range.
     *
     *   * You must [open a support ticket](/docs/api/support/#support-ticket-open) to request a `/64` block of IPv6 addresses to be added to your account.
     *
    **/
    getIPv6Ranges(req: operations.GetIPv6RangesRequest, config?: AxiosRequestConfig): Promise<operations.GetIPv6RangesResponse>;
    /**
     * getImage - Image View
     *
     * Get information about a single Image.
     *
    **/
    getImage(req: operations.GetImageRequest, config?: AxiosRequestConfig): Promise<operations.GetImageResponse>;
    /**
     * getImages - Images List
     *
     * Returns a paginated list of Images.
     *
     * * **Public** Images have IDs that begin with "linode/". These distribution images are generally available to
     * all users. To view only public Images, call this endpoint without authentication.
     *
     * * **Private** Images have IDs that begin with "private/". These images are account-specific and only
     * accessible to users with `images:read_only` authorization. To view private Images you have access to in
     * addition to public images, call this endpoint with authentication.
     *
    **/
    getImages(req: operations.GetImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesResponse>;
    /**
     * getInvoice - Invoice View
     *
     * Returns a single Invoice object.
    **/
    getInvoice(req: operations.GetInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceResponse>;
    /**
     * getInvoiceItems - Invoice Items List
     *
     * Returns a paginated list of Invoice items.
    **/
    getInvoiceItems(req: operations.GetInvoiceItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceItemsResponse>;
    /**
     * getInvoices - Invoices List
     *
     * Returns a paginated list of Invoices against your Account.
     *
    **/
    getInvoices(req: operations.GetInvoicesRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoicesResponse>;
    /**
     * getKernel - Kernel View
     *
     * Returns information about a single Kernel.
     *
    **/
    getKernel(req: operations.GetKernelRequest, config?: AxiosRequestConfig): Promise<operations.GetKernelResponse>;
    /**
     * getKernels - Kernels List
     *
     * Lists available Kernels.
     *
    **/
    getKernels(req: operations.GetKernelsRequest, config?: AxiosRequestConfig): Promise<operations.GetKernelsResponse>;
    /**
     * getLkeCluster - Kubernetes Cluster View
     *
     * Get a specific Cluster by ID.
     *
    **/
    getLkeCluster(req: operations.GetLkeClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetLkeClusterResponse>;
    /**
     * getLkeClusterApiEndpoints - Kubernetes API Endpoints List
     *
     * List the Kubernetes API server endpoints for this cluster. Please note that it often takes 2-5 minutes before the endpoint is ready after first [creating a new cluster](/docs/api/linode-kubernetes-engine-lke/#kubernetes-cluster-create).
     *
    **/
    getLkeClusterApiEndpoints(req: operations.GetLkeClusterApiEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.GetLkeClusterApiEndpointsResponse>;
    /**
     * getLkeClusterKubeconfig - Kubeconfig View
     *
     * Get the Kubeconfig file for a Cluster. Please note that it often takes 2-5 minutes before
     * the Kubeconfig file is ready after first [creating a new cluster](/docs/api/linode-kubernetes-engine-lke/#kubernetes-cluster-create).
     *
    **/
    getLkeClusterKubeconfig(req: operations.GetLkeClusterKubeconfigRequest, config?: AxiosRequestConfig): Promise<operations.GetLkeClusterKubeconfigResponse>;
    /**
     * getLkeClusterNode - Node View
     *
     * Returns the values for a specified node object.
     *
    **/
    getLkeClusterNode(req: operations.GetLkeClusterNodeRequest, config?: AxiosRequestConfig): Promise<operations.GetLkeClusterNodeResponse>;
    /**
     * getLkeClusterPools - Node Pools List
     *
     * Returns all active Node Pools on a Kubernetes cluster.
     *
    **/
    getLkeClusterPools(req: operations.GetLkeClusterPoolsRequest, config?: AxiosRequestConfig): Promise<operations.GetLkeClusterPoolsResponse>;
    /**
     * getLkeClusters - Kubernetes Clusters List
     *
     * Lists current Kubernetes clusters available on your account.
     *
    **/
    getLkeClusters(req: operations.GetLkeClustersRequest, config?: AxiosRequestConfig): Promise<operations.GetLkeClustersResponse>;
    /**
     * getLkeNodePool - Node Pool View
     *
     * Get a specific Node Pool by ID.
     *
    **/
    getLkeNodePool(req: operations.GetLkeNodePoolRequest, config?: AxiosRequestConfig): Promise<operations.GetLkeNodePoolResponse>;
    /**
     * getLkeVersion - Kubernetes Version View
     *
     * View a Kubernetes version available for deployment to a Kubernetes cluster.
     *
    **/
    getLkeVersion(req: operations.GetLkeVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetLkeVersionResponse>;
    /**
     * getLkeVersions - Kubernetes Versions List
     *
     * List the Kubernetes versions available for deployment to a Kubernetes cluster.
     *
    **/
    getLkeVersions(req: operations.GetLkeVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetLkeVersionsResponse>;
    /**
     * getLinodeConfig - Configuration Profile View
     *
     * Returns information about a specific Configuration profile.
     *
    **/
    getLinodeConfig(req: operations.GetLinodeConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeConfigResponse>;
    /**
     * getLinodeConfigs - Configuration Profiles List
     *
     * Lists Configuration profiles associated with a Linode.
     *
    **/
    getLinodeConfigs(req: operations.GetLinodeConfigsRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeConfigsResponse>;
    /**
     * getLinodeDisk - Disk View
     *
     * View Disk information for a Disk associated with this Linode.
     *
    **/
    getLinodeDisk(req: operations.GetLinodeDiskRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeDiskResponse>;
    /**
     * getLinodeDisks - Disks List
     *
     * View Disk information for Disks associated with this Linode.
     *
    **/
    getLinodeDisks(req: operations.GetLinodeDisksRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeDisksResponse>;
    /**
     * getLinodeFirewalls - Firewalls List
     *
     * View Firewall information for Firewalls associated with this Linode.
     *
    **/
    getLinodeFirewalls(req: operations.GetLinodeFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeFirewallsResponse>;
    /**
     * getLinodeIp - IP Address View
     *
     * View information about the specified IP address associated with the specified Linode.
     *
    **/
    getLinodeIp(req: operations.GetLinodeIpRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeIpResponse>;
    /**
     * getLinodeIPs - Networking Information List
     *
     * Returns networking information for a single Linode.
     *
    **/
    getLinodeIPs(req: operations.GetLinodeIPsRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeIPsResponse>;
    /**
     * getLinodeInstance - Linode View
     *
     * Get a specific Linode by ID.
    **/
    getLinodeInstance(req: operations.GetLinodeInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeInstanceResponse>;
    /**
     * getLinodeInstances - Linodes List
     *
     * Returns a paginated list of Linodes you have permission to view.
     *
    **/
    getLinodeInstances(req: operations.GetLinodeInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeInstancesResponse>;
    /**
     * getLinodeStats - Linode Statistics View
     *
     * Returns CPU, IO, IPv4, and IPv6 statistics for your Linode for the past 24 hours.
     *
    **/
    getLinodeStats(req: operations.GetLinodeStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeStatsResponse>;
    /**
     * getLinodeStatsByYearMonth - Statistics View (year/month)
     *
     * Returns statistics for a specific month. The year/month values must be either a date in the past, or the current month. If the current month, statistics will be retrieved for the past 30 days.
     *
    **/
    getLinodeStatsByYearMonth(req: operations.GetLinodeStatsByYearMonthRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeStatsByYearMonthResponse>;
    /**
     * getLinodeTransfer - Network Transfer View
     *
     * Returns a Linode's network transfer pool statistics for the current month.
     *
    **/
    getLinodeTransfer(req: operations.GetLinodeTransferRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeTransferResponse>;
    /**
     * getLinodeTransferByYearMonth - Network Transfer View (year/month)
     *
     * Returns a Linode's network transfer statistics for a specific month. The year/month values must be either a date in the past, or the current month.
     *
    **/
    getLinodeTransferByYearMonth(req: operations.GetLinodeTransferByYearMonthRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeTransferByYearMonthResponse>;
    /**
     * getLinodeType - Type View
     *
     * Returns information about a specific Linode Type, including pricing and specifications. This is used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
     *
    **/
    getLinodeType(req: operations.GetLinodeTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeTypeResponse>;
    /**
     * getLinodeTypes - Types List
     *
     * Returns collection of Linode Types, including pricing and specifications for each Type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
     *
    **/
    getLinodeTypes(config?: AxiosRequestConfig): Promise<operations.GetLinodeTypesResponse>;
    /**
     * getLinodeVolumes - Linode's Volumes List
     *
     * View Block Storage Volumes attached to this Linode.
     *
    **/
    getLinodeVolumes(req: operations.GetLinodeVolumesRequest, config?: AxiosRequestConfig): Promise<operations.GetLinodeVolumesResponse>;
    /**
     * getLongviewClient - Longview Client View
     *
     * Returns a single Longview Client you can access.
     *
    **/
    getLongviewClient(req: operations.GetLongviewClientRequest, config?: AxiosRequestConfig): Promise<operations.GetLongviewClientResponse>;
    /**
     * getLongviewClients - Longview Clients List
     *
     * Returns a paginated list of Longview Clients you have access to. Longview Client is used to monitor stats on your Linode with the help of the Longview Client application.
     *
    **/
    getLongviewClients(req: operations.GetLongviewClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetLongviewClientsResponse>;
    /**
     * getLongviewPlan - Longview Plan View
     *
     * Get the details of your current Longview plan. This returns a `LongviewSubscription` object for your current Longview Pro plan, or an empty set `{}` if your current plan is Longview Free.
     *
     * You must have at least one of the following `global` [User Grants](/docs/api/account/#users-grants-view) in order to access this endpoint:
     *
     *   - `"account_access": read_write`
     *   - `"account_access": read_only`
     *   - `"longview_subscription": true`
     *   - `"add_longview": true`
     *
     *
     * To update your subscription plan, send a request to [Update Longview Plan](/docs/api/longview/#longview-plan-update).
     *
    **/
    getLongviewPlan(req: operations.GetLongviewPlanRequest, config?: AxiosRequestConfig): Promise<operations.GetLongviewPlanResponse>;
    /**
     * getLongviewSubscription - Longview Subscription View
     *
     * Get the Longview plan details as a single `LongviewSubscription` object for the provided subscription ID. This is a public endpoint and requires no authentication.
     *
    **/
    getLongviewSubscription(req: operations.GetLongviewSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetLongviewSubscriptionResponse>;
    /**
     * getLongviewSubscriptions - Longview Subscriptions List
     *
     * Returns a paginated list of available Longview Subscriptions. This is a public endpoint and requires no authentication.
     *
    **/
    getLongviewSubscriptions(req: operations.GetLongviewSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetLongviewSubscriptionsResponse>;
    /**
     * getMaintenance - Maintenance List
     *
     * Returns a collection of Maintenance objects for any entity a user has permissions to view.
     *
     * Currently, Linodes are the only entities available for viewing.
     *
     * **Beta**: This endpoint is in beta. Please make sure to prepend all requests with `/v4beta` instead of `/v4`, and be aware that this endpoint may receive breaking updates in the future. This notice will be removed when this endpoint is out of beta.
     *
    **/
    getMaintenance(req: operations.GetMaintenanceRequest, config?: AxiosRequestConfig): Promise<operations.GetMaintenanceResponse>;
    /**
     * getManagedContact - Managed Contact View
     *
     * Returns a single Managed Contact.
     *
    **/
    getManagedContact(req: operations.GetManagedContactRequest, config?: AxiosRequestConfig): Promise<operations.GetManagedContactResponse>;
    /**
     * getManagedContacts - Managed Contacts List
     *
     * Returns a paginated list of Managed Contacts on your Account.
     *
    **/
    getManagedContacts(req: operations.GetManagedContactsRequest, config?: AxiosRequestConfig): Promise<operations.GetManagedContactsResponse>;
    /**
     * getManagedCredential - Managed Credential View
     *
     * Returns a single Managed Credential.
     *
    **/
    getManagedCredential(req: operations.GetManagedCredentialRequest, config?: AxiosRequestConfig): Promise<operations.GetManagedCredentialResponse>;
    /**
     * getManagedCredentials - Managed Credentials List
     *
     * Returns a paginated list of Managed Credentials on your Account.
     *
    **/
    getManagedCredentials(req: operations.GetManagedCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GetManagedCredentialsResponse>;
    /**
     * getManagedIssue - Managed Issue View
     *
     * Returns a single Issue that is impacting or did impact one of your Managed Services.
     *
    **/
    getManagedIssue(req: operations.GetManagedIssueRequest, config?: AxiosRequestConfig): Promise<operations.GetManagedIssueResponse>;
    /**
     * getManagedIssues - Managed Issues List
     *
     * Returns a paginated list of recent and ongoing issues detected on your Managed Services.
     *
    **/
    getManagedIssues(req: operations.GetManagedIssuesRequest, config?: AxiosRequestConfig): Promise<operations.GetManagedIssuesResponse>;
    /**
     * getManagedLinodeSetting - Linode's Managed Settings View
     *
     * Returns a single Linode's Managed settings.
     *
    **/
    getManagedLinodeSetting(req: operations.GetManagedLinodeSettingRequest, config?: AxiosRequestConfig): Promise<operations.GetManagedLinodeSettingResponse>;
    /**
     * getManagedLinodeSettings - Managed Linode Settings List
     *
     * Returns a paginated list of Managed Settings for your Linodes. There will be one entry per Linode on your Account.
     *
    **/
    getManagedLinodeSettings(req: operations.GetManagedLinodeSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetManagedLinodeSettingsResponse>;
    /**
     * getManagedService - Managed Service View
     *
     * Returns information about a single Managed Service on your Account.
     *
    **/
    getManagedService(req: operations.GetManagedServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetManagedServiceResponse>;
    /**
     * getManagedServices - Managed Services List
     *
     * Returns a paginated list of Managed Services on your Account. These are the services Linode Managed is monitoring and will report and attempt to resolve issues with.
     *
    **/
    getManagedServices(req: operations.GetManagedServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetManagedServicesResponse>;
    /**
     * getManagedStats - Managed Stats List
     *
     * Returns a list of Managed Stats on your Account in the form of x and y data points.
     * You can use these data points to plot your own graph visualizations. These stats
     * reflect the last 24 hours of combined usage across all managed Linodes on your account
     * giving you a high-level snapshot of data for the following:
     *
     *
     * * cpu
     * * disk
     * * swap
     * * network in
     * * network out
     *
    **/
    getManagedStats(req: operations.GetManagedStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetManagedStatsResponse>;
    /**
     * getNodeBalancer - NodeBalancer View
     *
     * Returns a single NodeBalancer you can access.
     *
    **/
    getNodeBalancer(req: operations.GetNodeBalancerRequest, config?: AxiosRequestConfig): Promise<operations.GetNodeBalancerResponse>;
    /**
     * getNodeBalancerConfig - Config View
     *
     * Returns configuration information for a single port of this NodeBalancer.
     *
    **/
    getNodeBalancerConfig(req: operations.GetNodeBalancerConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetNodeBalancerConfigResponse>;
    /**
     * getNodeBalancerConfigNodes - Nodes List
     *
     * Returns a paginated list of NodeBalancer nodes associated with this Config. These are the backends that will be sent traffic for this port.
     *
    **/
    getNodeBalancerConfigNodes(req: operations.GetNodeBalancerConfigNodesRequest, config?: AxiosRequestConfig): Promise<operations.GetNodeBalancerConfigNodesResponse>;
    /**
     * getNodeBalancerConfigs - Configs List
     *
     * Returns a paginated list of NodeBalancer Configs associated with this NodeBalancer. NodeBalancer Configs represent individual ports that this NodeBalancer will accept traffic on, one Config per port.
     *
     * For example, if you wanted to accept standard HTTP traffic, you would need a Config listening on port 80.
     *
    **/
    getNodeBalancerConfigs(req: operations.GetNodeBalancerConfigsRequest, config?: AxiosRequestConfig): Promise<operations.GetNodeBalancerConfigsResponse>;
    /**
     * getNodeBalancerNode - Node View
     *
     * Returns information about a single Node, a backend for this NodeBalancer's configured port.
     *
    **/
    getNodeBalancerNode(req: operations.GetNodeBalancerNodeRequest, config?: AxiosRequestConfig): Promise<operations.GetNodeBalancerNodeResponse>;
    /**
     * getNodeBalancers - NodeBalancers List
     *
     * Returns a paginated list of NodeBalancers you have access to.
     *
    **/
    getNodeBalancers(req: operations.GetNodeBalancersRequest, config?: AxiosRequestConfig): Promise<operations.GetNodeBalancersResponse>;
    /**
     * getNotifications - Notifications List
     *
     * Returns a collection of Notification objects representing important, often time-sensitive items related to your Account.
     * You cannot interact directly with Notifications, and a Notification will disappear when the circumstances causing it have been resolved. For example, if you have an important Ticket open, you must respond to the Ticket to dismiss the Notification.
     *
    **/
    getNotifications(req: operations.GetNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationsResponse>;
    /**
     * getObjectStorageBucket - Object Storage Bucket View
     *
     * Returns a single Object Storage Bucket.
     *
     *
     * This endpoint is available for convenience. It is recommended that instead you
     * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) directly.
     *
    **/
    getObjectStorageBucket(req: operations.GetObjectStorageBucketRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStorageBucketResponse>;
    /**
     * getObjectStorageBucketContent - Object Storage Bucket Contents List
     *
     * Returns the contents of a bucket. The contents are paginated using a `marker`,
     * which is the name of the last object on the previous page.  Objects may
     * be filtered by `prefix` and `delimiter` as well; see Query Parameters for more
     * information.
     *
     *
     * This endpoint is available for convenience. It is recommended that instead you
     * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object) directly.
     *
    **/
    getObjectStorageBucketContent(req: operations.GetObjectStorageBucketContentRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStorageBucketContentResponse>;
    /**
     * getObjectStorageBucketinCluster - Object Storage Buckets in Cluster List
     *
     * Returns a list of Buckets in this cluster belonging to this Account.
     *
     *
     * This endpoint is available for convenience. It is recommended that instead you
     * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) directly.
     *
    **/
    getObjectStorageBucketinCluster(req: operations.GetObjectStorageBucketinClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStorageBucketinClusterResponse>;
    /**
     * getObjectStorageBuckets - Object Storage Buckets List
     *
     * Returns a paginated list of all Object Storage Buckets that you own.
     *
     *
     * This endpoint is available for convenience. It is recommended that instead you
     * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/serviceops/#list-buckets) directly.
     *
    **/
    getObjectStorageBuckets(req: operations.GetObjectStorageBucketsRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStorageBucketsResponse>;
    /**
     * getObjectStorageCluster - Cluster View
     *
     * Returns a single Object Storage Cluster.
     *
    **/
    getObjectStorageCluster(req: operations.GetObjectStorageClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStorageClusterResponse>;
    /**
     * getObjectStorageClusters - Clusters List
     *
     * Returns a paginated list of Object Storage Clusters that are available for
     * use.  Users can connect to the clusters with third party clients to create buckets
     * and upload objects.
     *
    **/
    getObjectStorageClusters(req: operations.GetObjectStorageClustersRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStorageClustersResponse>;
    /**
     * getObjectStorageKey - Object Storage Key View
     *
     * Returns a single Object Storage Key provisioned for your account.
     *
    **/
    getObjectStorageKey(req: operations.GetObjectStorageKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStorageKeyResponse>;
    /**
     * getObjectStorageKeys - Object Storage Keys List
     *
     * Returns a paginated list of Object Storage Keys for authenticating to
     * the Object Storage S3 API.
     *
    **/
    getObjectStorageKeys(req: operations.GetObjectStorageKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStorageKeysResponse>;
    /**
     * getObjectStorageSsl - Object Storage TLS/SSL Cert View
     *
     * Returns a boolean value indicating if this bucket has a corresponding TLS/SSL certificate that was
     * uploaded by an Account user.
     *
    **/
    getObjectStorageSsl(req: operations.GetObjectStorageSslRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStorageSslResponse>;
    /**
     * getObjectStorageTransfer - Object Storage Transfer View
     *
     * The amount of outbound data transfer used by your account's Object Storage buckets.
     * Object Storage adds 1 terabyte of outbound data transfer to your data transfer pool.
     * See the [Object Storage Pricing and Limitations](/docs/guides/pricing-and-limitations/)
     * guide for details on Object Storage transfer quotas.
     *
    **/
    getObjectStorageTransfer(req: operations.GetObjectStorageTransferRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStorageTransferResponse>;
    /**
     * getPayment - Payment View
     *
     * Returns information about a specific Payment.
     *
    **/
    getPayment(req: operations.GetPaymentRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentResponse>;
    /**
     * getPaymentMethods - Payment Methods List
     *
     * Returns a paginated list of Payment Methods for this Account.
     *
    **/
    getPaymentMethods(req: operations.GetPaymentMethodsRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentMethodsResponse>;
    /**
     * getPayments - Payments List
     *
     * Returns a paginated list of Payments made on this Account.
     *
    **/
    getPayments(req: operations.GetPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentsResponse>;
    /**
     * getPersonalAccessToken - Personal Access Token View
     *
     * Returns a single Personal Access Token.
     *
    **/
    getPersonalAccessToken(req: operations.GetPersonalAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonalAccessTokenResponse>;
    /**
     * getPersonalAccessTokens - Personal Access Tokens List
     *
     * Returns a paginated list of Personal Access Tokens currently active for your User.
     *
    **/
    getPersonalAccessTokens(req: operations.GetPersonalAccessTokensRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonalAccessTokensResponse>;
    /**
     * getProfile - Profile View
     *
     * Returns information about the current User. This can be used to see who is acting in applications where more than one token is managed. For example, in third-party OAuth applications.
     *
     * This endpoint is always accessible, no matter what OAuth scopes the acting token has.
     *
    **/
    getProfile(req: operations.GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * getProfileApp - Authorized App View
     *
     * Returns information about a single app you've authorized to access your Account.
     *
    **/
    getProfileApp(req: operations.GetProfileAppRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileAppResponse>;
    /**
     * getProfileApps - Authorized Apps List
     *
     * This is a collection of OAuth apps that you've given access to your Account, and includes the level of access granted.
     *
    **/
    getProfileApps(req: operations.GetProfileAppsRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileAppsResponse>;
    /**
     * getProfileGrants - Grants List
     *
     * This returns a GrantsResponse describing what the acting User has been granted access to.  For unrestricted users, this will return a  204 and no body because unrestricted users have access to everything without grants.  This will not return information about entities you do not have access to.  This endpoint is useful when writing third-party OAuth applications to see what options you should present to the acting User.
     *
     * For example, if they do not have `global.add_linodes`, you might not display a button to deploy a new Linode.
     *
     * Any client may access this endpoint; no OAuth scopes are required.
     *
    **/
    getProfileGrants(req: operations.GetProfileGrantsRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileGrantsResponse>;
    /**
     * getProfileLogin - Login View
     *
     * Returns a login object displaying information about a successful account login from this user.
     *
    **/
    getProfileLogin(req: operations.GetProfileLoginRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileLoginResponse>;
    /**
     * getProfileLogins - Logins List
     *
     * Returns a collection of successful account logins from this user during the last 90 days.
     *
    **/
    getProfileLogins(req: operations.GetProfileLoginsRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileLoginsResponse>;
    /**
     * getRegion - Region View
     *
     * Returns a single Region.
     *
    **/
    getRegion(req: operations.GetRegionRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionResponse>;
    /**
     * getRegions - Regions List
     *
     * Lists the Regions available for Linode services. Not all services are guaranteed to be
     * available in all Regions.
     *
    **/
    getRegions(config?: AxiosRequestConfig): Promise<operations.GetRegionsResponse>;
    /**
     * getSshKey - SSH Key View
     *
     * Returns a single SSH Key object identified by `id` that you have access to view.
     *
    **/
    getSshKey(req: operations.GetSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetSshKeyResponse>;
    /**
     * getSshKeys - SSH Keys List
     *
     * Returns a collection of SSH Keys you've added to your Profile.
     *
    **/
    getSshKeys(req: operations.GetSshKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetSshKeysResponse>;
    /**
     * getServiceTransfer - Service Transfer View
     *
     * Returns the details of the Service Transfer for the provided token.
     *
     * While a transfer is pending, any unrestricted user *of any account* can access this command. After a
     * transfer has been accepted, it can only be viewed by unrestricted users of the accounts that created and
     * accepted the transfer. If cancelled or expired, only unrestricted users of the account that created the
     * transfer can view it.
     *
    **/
    getServiceTransfer(req: operations.GetServiceTransferRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceTransferResponse>;
    /**
     * getServiceTransfers - Service Transfers List
     *
     * Returns a collection of all created and accepted Service Transfers for this account, regardless of the user that created or accepted the transfer.
     *
     * This command can only be accessed by the unrestricted users of an account.
     *
    **/
    getServiceTransfers(req: operations.GetServiceTransfersRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceTransfersResponse>;
    /**
     * getStackScript - StackScript View
     *
     * Returns all of the information about a specified StackScript, including the contents of the script.
     *
    **/
    getStackScript(req: operations.GetStackScriptRequest, config?: AxiosRequestConfig): Promise<operations.GetStackScriptResponse>;
    /**
     * getStackScripts - StackScripts List
     *
     * If the request is not authenticated, only public StackScripts are returned.
     *
     * For more information on StackScripts, please read our [StackScripts guides](/docs/platform/stackscripts/).
     *
    **/
    getStackScripts(req: operations.GetStackScriptsRequest, config?: AxiosRequestConfig): Promise<operations.GetStackScriptsResponse>;
    /**
     * getTaggedObjects - Tagged Objects List
     *
     * Returns a paginated list of all objects you've tagged with the requested Tag. This is a mixed collection of all object types.
     *
    **/
    getTaggedObjects(req: operations.GetTaggedObjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetTaggedObjectsResponse>;
    /**
     * getTags - Tags List
     *
     * Tags are User-defined labels attached to objects in your Account, such as Linodes. They are used for specifying and grouping attributes of objects that are relevant to the User.
     *
     * This endpoint returns a paginated list of Tags on your account.
     *
    **/
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * getTicket - Support Ticket View
     *
     * Returns a Support Ticket under your Account.
     *
    **/
    getTicket(req: operations.GetTicketRequest, config?: AxiosRequestConfig): Promise<operations.GetTicketResponse>;
    /**
     * getTicketReplies - Replies List
     *
     * Returns a collection of replies to a Support Ticket on your Account.
     *
    **/
    getTicketReplies(req: operations.GetTicketRepliesRequest, config?: AxiosRequestConfig): Promise<operations.GetTicketRepliesResponse>;
    /**
     * getTickets - Support Tickets List
     *
     * Returns a collection of Support Tickets on your Account. Support Tickets can be both tickets you open with Linode for support, as well as tickets generated by Linode regarding your Account.
     * This collection includes all Support Tickets generated on your Account, with open tickets returned first.
     *
    **/
    getTickets(req: operations.GetTicketsRequest, config?: AxiosRequestConfig): Promise<operations.GetTicketsResponse>;
    /**
     * getTransfer - Network Utilization View
     *
     * Returns a Transfer object showing your network utilization, in GB, for the current month.
     *
    **/
    getTransfer(req: operations.GetTransferRequest, config?: AxiosRequestConfig): Promise<operations.GetTransferResponse>;
    /**
     * getTrustedDevice - Trusted Device View
     *
     * Returns a single active TrustedDevice for your User.
     *
    **/
    getTrustedDevice(req: operations.GetTrustedDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetTrustedDeviceResponse>;
    /**
     * getUser - User View
     *
     * Returns information about a single User on your Account.
     *
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUserGrants - User's Grants View
     *
     * Returns the full grants structure for the specified account User (other than the account owner, see below for details). This includes all entities on the Account alongside the level of access this User has to each of them.
     *
     * The current authenticated User, including the account owner, may view their own grants at the [/profile/grants](/docs/api/profile/#grants-list) endpoint, but will not see entities that they do not have access to.
     *
    **/
    getUserGrants(req: operations.GetUserGrantsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserGrantsResponse>;
    /**
     * getUserPreferences - User Preferences View
     *
     * View a list of user preferences tied to the OAuth client that generated
     * the token making the request. The user preferences endpoints allow
     * consumers of the API to store arbitrary JSON data, such as a user's font
     * size preference or preferred display name. User preferences are available
     * for each OAuth client registered to your account, and as such an account can
     * have multiple user preferences.
     *
    **/
    getUserPreferences(req: operations.GetUserPreferencesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPreferencesResponse>;
    /**
     * getUsers - Users List
     *
     * Returns a paginated list of Users on your Account. Users may access all or part of your Account based on their restricted status and grants.  An unrestricted User may access everything on the account, whereas restricted User may only access entities or perform actions they've been given specific grants to.
     *
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * getVlaNs - VLANs List
     *
     * Returns a list of all Virtual Local Area Networks (VLANs) on your Account. VLANs provide
     * a mechanism for secure communication between two or more Linodes that are assigned to the
     * same VLAN and are both within the same Layer 2 broadcast domain.
     *
     * VLANs are created and attached to Linodes by using the `interfaces` property for the following endpoints:
     *
     * - Linode Create ([POST /linode/instances](/docs/api/linode-instances/#linode-create))
     * - Configuration Profile Create ([POST /linode/instances/{linodeId}/configs](/docs/api/linode-instances/#configuration-profile-create))
     * - Configuration Profile Update ([PUT /linode/instances/{linodeId}/configs/{configId}](/docs/api/linode-instances/#configuration-profile-update))
     *
     * There are several ways to detach a VLAN from a Linode:
     *
     * - [Update](/docs/api/linode-instances/#configuration-profile-update) the active Configuration Profile to remove the VLAN interface, then [reboot](/docs/api/linode-instances/#linode-reboot) the Linode.
     * - [Create](/docs/api/linode-instances/#configuration-profile-create) a new Configuration Profile without the VLAN interface, then [reboot](/docs/apilinode-instances/#linode-reboot) the Linode into the new Configuration Profile.
     * - [Delete](/docs/api/linode-instances/#linode-delete) the Linode.
     *
     * **VLANs cannot be manually renamed.** If a VLAN's label must be changed, create a new VLAN and attach all required Linodes to it.
     *
     * **VLANs cannot be manually deleted.** There is no need to manually delete a VLAN. If a VLAN is no longer needed, detach it from all Linodes. A VLANs that are not attached to any Linodes are automatically deleted within a short timeframe.
     *
     * **Note:** Only Next Generation Network (NGN) data centers support VLANs. Use the Regions ([/regions](/docs/api/regions/)) endpoint to view the capabilities of data center regions.
     * If a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center,
     * the migration or cloning will not initiate. If a Linode cannot be migrated because of an incompatibility,
     * you will be prompted to select a different data center or contact support.
     *
    **/
    getVlaNs(req: operations.GetVlaNsRequest, config?: AxiosRequestConfig): Promise<operations.GetVlaNsResponse>;
    /**
     * getVolume - Volume View
     *
     * Get information about a single Volume.
     *
    **/
    getVolume(req: operations.GetVolumeRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumeResponse>;
    /**
     * getVolumes - Volumes List
     *
     * Returns a paginated list of Volumes you have permission to view.
     *
    **/
    getVolumes(req: operations.GetVolumesRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesResponse>;
    /**
     * importDomain - Domain Import
     *
     * Imports a domain zone from a remote nameserver.
     * Your nameserver must allow zone transfers (AXFR) from the following IPs:
     *
     *   - 96.126.114.97
     *   - 96.126.114.98
     *   - 2600:3c00::5e
     *   - 2600:3c00::5f
     *
    **/
    importDomain(req: operations.ImportDomainRequest, config?: AxiosRequestConfig): Promise<operations.ImportDomainResponse>;
    /**
     * migrateLinodeInstance - DC Migration/Pending Host Migration Initiate
     *
     * Initiate a pending host migration that has been scheduled by Linode or initiate a cross data center (DC) migration.  A list of pending migrations, if any, can be accessed from [GET /account/notifications](/docs/api/account/#notifications-list). When the migration begins, your Linode will be shutdown if not already off. If the migration initiated the shutdown, it will reboot the Linode when completed.
     *
     * To initiate a cross DC migration, you must pass a `region` parameter to the request body specifying the target data center region. You can view a list of all available regions and their feature capabilities from [GET /regions](/docs/api/regions/#regions-list). If your Linode has a DC migration already queued or you have initiated a previously scheduled migration, you will not be able to initiate a DC migration until it has completed.
     *
     * **Note:** Next Generation Network (NGN) data centers do not support IPv6 `/116` pools or IP Failover. If you have these features enabled on your Linode and attempt to migrate to an NGN data center, the migration will not initiate. If a Linode cannot be migrated because of an incompatibility, you will be prompted to select a different data center or contact support.
     *
    **/
    migrateLinodeInstance(req: operations.MigrateLinodeInstanceRequest, config?: AxiosRequestConfig): Promise<operations.MigrateLinodeInstanceResponse>;
    /**
     * modifyObjectStorageBucketAccess - Object Storage Bucket Access Modify
     *
     * Allows changing basic Cross-origin Resource Sharing (CORS) and Access Control Level (ACL) settings.
     * Only allows enabling/disabling CORS for all origins, and/or setting canned ACLs.
     *
     *
     * For more fine-grained control of both systems, please use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket-acl) directly.
     *
    **/
    modifyObjectStorageBucketAccess(req: operations.ModifyObjectStorageBucketAccessRequest, config?: AxiosRequestConfig): Promise<operations.ModifyObjectStorageBucketAccessResponse>;
    /**
     * mutateLinodeInstance - Linode Upgrade
     *
     * Linodes created with now-deprecated Types are entitled to a free upgrade to the next generation. A mutating Linode will be allocated any new resources the upgraded Type provides, and will be subsequently restarted if it was currently running.
     * If any actions are currently running or queued, those actions must be completed first before you can initiate a mutate.
     *
    **/
    mutateLinodeInstance(req: operations.MutateLinodeInstanceRequest, config?: AxiosRequestConfig): Promise<operations.MutateLinodeInstanceResponse>;
    /**
     * postLkeClusterNodeRecycle - Node Recycle
     *
     * Recycles an individual Node in the designated Kubernetes Cluster. The Node will be deleted
     * and replaced with a new Linode, which may take a few minutes. Replacement Nodes are
     * installed with the latest available patch for the Cluster's Kubernetes Version.
     *
     * **Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**
     *
    **/
    postLkeClusterNodeRecycle(req: operations.PostLkeClusterNodeRecycleRequest, config?: AxiosRequestConfig): Promise<operations.PostLkeClusterNodeRecycleResponse>;
    /**
     * postLkeClusterPoolRecycle - Node Pool Recycle
     *
     * Recycles a Node Pool for the designated Kubernetes Cluster. All Linodes within the Node Pool will be deleted
     * and replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are
     * installed with the latest available patch for the Cluster's Kubernetes Version.
     *
     * **Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**
     *
    **/
    postLkeClusterPoolRecycle(req: operations.PostLkeClusterPoolRecycleRequest, config?: AxiosRequestConfig): Promise<operations.PostLkeClusterPoolRecycleResponse>;
    /**
     * postLkeClusterPools - Node Pool Create
     *
     * Creates a new Node Pool for the designated Kubernetes cluster.
     *
    **/
    postLkeClusterPools(req: operations.PostLkeClusterPoolsRequest, config?: AxiosRequestConfig): Promise<operations.PostLkeClusterPoolsResponse>;
    /**
     * postLkeClusterRecycle - Cluster Nodes Recycle
     *
     * Recycles all nodes in all pools of a designated Kubernetes Cluster. All Linodes within the Cluster will be deleted
     * and replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are
     * installed with the latest available [patch version](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/release/versioning.md#kubernetes-release-versioning) for the Cluster's current Kubernetes minor release.
     *
     * **Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**
     *
    **/
    postLkeClusterRecycle(req: operations.PostLkeClusterRecycleRequest, config?: AxiosRequestConfig): Promise<operations.PostLkeClusterRecycleResponse>;
    /**
     * putLkeCluster - Kubernetes Cluster Update
     *
     * Updates a Kubernetes cluster.
     *
    **/
    putLkeCluster(req: operations.PutLkeClusterRequest, config?: AxiosRequestConfig): Promise<operations.PutLkeClusterResponse>;
    /**
     * putLkeNodePool - Node Pool Update
     *
     * Updates a Node Pool's count.
     *
     * Linodes will be created or deleted to match changes to the Node Pool's count.
     *
     * **Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**
     *
    **/
    putLkeNodePool(req: operations.PutLkeNodePoolRequest, config?: AxiosRequestConfig): Promise<operations.PutLkeNodePoolResponse>;
    /**
     * rebootLinodeInstance - Linode Reboot
     *
     * Reboots a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a reboot.
     *
    **/
    rebootLinodeInstance(req: operations.RebootLinodeInstanceRequest, config?: AxiosRequestConfig): Promise<operations.RebootLinodeInstanceResponse>;
    /**
     * rebuildLinodeInstance - Linode Rebuild
     *
     * Rebuilds a Linode you have the `read_write` permission to modify.
     * A rebuild will first shut down the Linode, delete all disks and configs on the Linode, and then deploy a new `image` to the Linode with the given attributes. Additionally:
     *
     *   * Requires an `image` be supplied.
     *   * Requires a `root_pass` be supplied to use for the root User's Account.
     *   * It is recommended to supply SSH keys for the root User using the
     *     `authorized_keys` field.
     *
    **/
    rebuildLinodeInstance(req: operations.RebuildLinodeInstanceRequest, config?: AxiosRequestConfig): Promise<operations.RebuildLinodeInstanceResponse>;
    /**
     * rebuildNodeBalancerConfig - Config Rebuild
     *
     * Rebuilds a NodeBalancer Config and its Nodes that you have permission to modify.
     *
    **/
    rebuildNodeBalancerConfig(req: operations.RebuildNodeBalancerConfigRequest, config?: AxiosRequestConfig): Promise<operations.RebuildNodeBalancerConfigResponse>;
    /**
     * removeLinodeIp - IPv4 Address Delete
     *
     * Deletes a public IPv4 address associated with this Linode. This will fail if it is the Linode's last remaining public IPv4 address. Private IPv4 addresses cannot be removed via this endpoint.
     *
    **/
    removeLinodeIp(req: operations.RemoveLinodeIpRequest, config?: AxiosRequestConfig): Promise<operations.RemoveLinodeIpResponse>;
    /**
     * rescueLinodeInstance - Linode Boot into Rescue Mode
     *
     * Rescue Mode is a safe environment for performing many system recovery and disk management tasks. Rescue Mode is based on the Finnix recovery distribution, a self-contained and bootable Linux distribution. You can also use Rescue Mode for tasks other than disaster recovery, such as formatting disks to use different filesystems, copying data between disks, and downloading files from a disk via SSH and SFTP.
     * * Note that "sdh" is reserved and unavailable during rescue.
     *
    **/
    rescueLinodeInstance(req: operations.RescueLinodeInstanceRequest, config?: AxiosRequestConfig): Promise<operations.RescueLinodeInstanceResponse>;
    /**
     * resetClientSecret - OAuth Client Secret Reset
     *
     * Resets the OAuth Client secret for a client you own, and returns the OAuth Client with the plaintext secret. This secret is not supposed to be publicly known or disclosed anywhere. This can be used to generate a new secret in case the one you have has been leaked, or to get a new secret if you lost the original. The old secret is expired immediately, and logins to your client with the old secret will fail.
     *
    **/
    resetClientSecret(req: operations.ResetClientSecretRequest, config?: AxiosRequestConfig): Promise<operations.ResetClientSecretResponse>;
    /**
     * resetDiskPassword - Disk Root Password Reset
     *
     * Resets the password of a Disk you have permission to `read_write`.
     *
    **/
    resetDiskPassword(req: operations.ResetDiskPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetDiskPasswordResponse>;
    /**
     * resetLinodePassword - Linode Root Password Reset
     *
     * Resets the root password for this Linode.
     * * Your Linode must be [shut down](/docs/api/linode-instances/#linode-shut-down) for a password reset to complete.
     * * If your Linode has more than one disk (not counting its swap disk), use the [Reset Disk Root Password](/docs/api/linode-instances/#disk-root-password-reset) endpoint to update a specific disk's root password.
     * * A `password_reset` event is generated when a root password reset is successful.
     *
    **/
    resetLinodePassword(req: operations.ResetLinodePasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetLinodePasswordResponse>;
    /**
     * resizeDisk - Disk Resize
     *
     * Resizes a Disk you have permission to `read_write`.
     *
     * The Disk must not be in use. If the Disk is in use, the request will
     * succeed but the resize will ultimately fail. For a request to succeed,
     * the Linode must be shut down prior to resizing the Disk, or the Disk
     * must not be assigned to the Linode's active Configuration Profile.
     *
     * If you are resizing the Disk to a smaller size, it cannot be made smaller
     * than what is required by the total size of the files current on the Disk.
     *
    **/
    resizeDisk(req: operations.ResizeDiskRequest, config?: AxiosRequestConfig): Promise<operations.ResizeDiskResponse>;
    /**
     * resizeLinodeInstance - Linode Resize
     *
     * Resizes a Linode you have the `read_write` permission to a different Type. If any actions are currently running or queued, those actions must be completed first before you can initiate a resize. Additionally, the following criteria must be met in order to resize a Linode:
     *
     *   * The Linode must not have a pending migration.
     *   * Your Account cannot have an outstanding balance.
     *   * The Linode must not have more disk allocation than the new Type allows.
     *     * In that situation, you must first delete or resize the disk to be smaller.
     *
    **/
    resizeLinodeInstance(req: operations.ResizeLinodeInstanceRequest, config?: AxiosRequestConfig): Promise<operations.ResizeLinodeInstanceResponse>;
    /**
     * resizeVolume - Volume Resize
     *
     * Resize an existing Volume on your Account. In order for this request to complete successfully, your User must have the `read_write` permissions to the Volume.
     * * Volumes can only be resized up.
     *
    **/
    resizeVolume(req: operations.ResizeVolumeRequest, config?: AxiosRequestConfig): Promise<operations.ResizeVolumeResponse>;
    /**
     * restoreBackup - Backup Restore
     *
     * Restores a Linode's Backup to the specified Linode.
     *
    **/
    restoreBackup(req: operations.RestoreBackupRequest, config?: AxiosRequestConfig): Promise<operations.RestoreBackupResponse>;
    /**
     * revokeTrustedDevice - Trusted Device Revoke
     *
     * Revoke an active TrustedDevice for your User.  Once a TrustedDevice is revoked, this device will have to log in again before accessing your Linode account.
     *
    **/
    revokeTrustedDevice(req: operations.RevokeTrustedDeviceRequest, config?: AxiosRequestConfig): Promise<operations.RevokeTrustedDeviceResponse>;
    /**
     * setClientThumbnail - OAuth Client Thumbnail Update
     *
     * Upload a thumbnail for a client you own.  You must upload an image file that will be returned when the thumbnail is retrieved.  This image will be publicly-viewable.
     *
    **/
    setClientThumbnail(req: operations.SetClientThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.SetClientThumbnailResponse>;
    /**
     * shareIPs - IP Sharing Configure
     *
     * Configure shared IPs.  A shared IP may be brought up on a Linode other than the one it lists in its response.  This can be used to allow one Linode to begin serving requests should another become unresponsive.
     *
    **/
    shareIPs(req: operations.ShareIPsRequest, config?: AxiosRequestConfig): Promise<operations.ShareIPsResponse>;
    /**
     * shutdownLinodeInstance - Linode Shut Down
     *
     * Shuts down a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a shutdown.
     *
    **/
    shutdownLinodeInstance(req: operations.ShutdownLinodeInstanceRequest, config?: AxiosRequestConfig): Promise<operations.ShutdownLinodeInstanceResponse>;
    /**
     * tfaConfirm - Two Factor Authentication Confirm/Enable
     *
     * Confirms that you can successfully generate Two Factor codes and enables TFA on your Account. Once this is complete, login attempts from untrusted computers will be required to provide a Two Factor code before they are successful.
     *
    **/
    tfaConfirm(req: operations.TfaConfirmRequest, config?: AxiosRequestConfig): Promise<operations.TfaConfirmResponse>;
    /**
     * tfaDisable - Two Factor Authentication Disable
     *
     * Disables Two Factor Authentication for your User. Once successful, login attempts from untrusted computers will only require a password before being successful. This is less secure, and is discouraged.
     *
    **/
    tfaDisable(req: operations.TfaDisableRequest, config?: AxiosRequestConfig): Promise<operations.TfaDisableResponse>;
    /**
     * tfaEnable - Two Factor Secret Create
     *
     * Generates a Two Factor secret for your User. TFA will not be enabled until you have successfully confirmed the code you were given with [tfa-enable-confirm](/docs/api/profile/#two-factor-secret-create) (see below). Once enabled, logins from untrusted computers will be required to provide a TFA code before they are successful.
     *
    **/
    tfaEnable(req: operations.TfaEnableRequest, config?: AxiosRequestConfig): Promise<operations.TfaEnableResponse>;
    /**
     * updateAccount - Account Update
     *
     * Updates contact and billing information related to your Account.
     *
    **/
    updateAccount(req: operations.UpdateAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountResponse>;
    /**
     * updateAccountSettings - Account Settings Update
     *
     * Updates your Account settings.
     *
     * To update your Longview subscription plan, send a request to [Update Longview Plan](/docs/api/longview/#longview-plan-update).
     *
    **/
    updateAccountSettings(req: operations.UpdateAccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountSettingsResponse>;
    /**
     * updateClient - OAuth Client Update
     *
     * Update information about an OAuth Client on your Account. This can be especially useful to update the `redirect_uri` of your client in the event that the callback url changed in your application.
     *
    **/
    updateClient(req: operations.UpdateClientRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClientResponse>;
    /**
     * updateDisk - Disk Update
     *
     * Updates a Disk that you have permission to `read_write`.
     *
    **/
    updateDisk(req: operations.UpdateDiskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDiskResponse>;
    /**
     * updateDomain - Domain Update
     *
     * Update information about a Domain in Linode's DNS Manager.
     *
    **/
    updateDomain(req: operations.UpdateDomainRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainResponse>;
    /**
     * updateDomainRecord - Domain Record Update
     *
     * Updates a single Record on this Domain.
     *
    **/
    updateDomainRecord(req: operations.UpdateDomainRecordRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainRecordResponse>;
    /**
     * updateFirewall - Firewall Update
     *
     * Updates information for a Firewall. Some parts of a Firewall's configuration cannot
     * be manipulated by this endpoint:
     *
     * - A Firewall's Devices cannot be set with this endpoint. Instead, use the
     * [Create Firewall Device](/docs/api/networking/#firewall-device-create)
     * and [Delete Firewall Device](/docs/api/networking/#firewall-device-delete)
     * endpoints to assign and remove this Firewall from Linode services.
     *
     * - A Firewall's Rules cannot be changed with this endpoint. Instead, use the
     * [Update Firewall Rules](/docs/api/networking/#firewall-rules-update)
     * endpoint to update your Rules.
     *
     * - A Firewall's status can be set to `enabled` or `disabled` by this endpoint, but it cannot be
     * set to `deleted`. Instead, use the
     * [Delete Firewall](/docs/api/networking/#firewall-delete)
     * endpoint to delete a Firewall.
     *
     * If a Firewall's status is changed with this endpoint, a corresponding `firewall_enable` or
     * `firewall_disable` Event will be generated.
     *
     * Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
     *
    **/
    updateFirewall(req: operations.UpdateFirewallRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallResponse>;
    /**
     * updateFirewallRules - Firewall Rules Update
     *
     * Updates the inbound and outbound Rules for a Firewall. Using this endpoint will
     * replace all of a Firewall's ruleset with the Rules specified in your request.
     *
     * Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
     *
    **/
    updateFirewallRules(req: operations.UpdateFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallRulesResponse>;
    /**
     * updateIp - IP Address RDNS Update
     *
     * Sets RDNS on an IP Address. Forward DNS must already be set up for reverse DNS to be applied. If you set the RDNS to `null` for public IPv4 addresses, it will be reset to the default _members.linode.com_ RDNS value.
     *
    **/
    updateIp(req: operations.UpdateIpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIpResponse>;
    /**
     * updateImage - Image Update
     *
     * Updates a private Image that you have permission to `read_write`.
     *
    **/
    updateImage(req: operations.UpdateImageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateImageResponse>;
    /**
     * updateLinodeConfig - Configuration Profile Update
     *
     * Updates a Configuration profile.
     *
    **/
    updateLinodeConfig(req: operations.UpdateLinodeConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLinodeConfigResponse>;
    /**
     * updateLinodeIp - IP Address Update
     *
     * Updates a particular IP Address associated with this Linode. Only allows setting/resetting reverse DNS.
     *
    **/
    updateLinodeIp(req: operations.UpdateLinodeIpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLinodeIpResponse>;
    /**
     * updateLinodeInstance - Linode Update
     *
     * Updates a Linode that you have permission to `read_write`.
     *
     * **Important**: You must be an unrestricted User in order to add or modify tags on Linodes.
     *
    **/
    updateLinodeInstance(req: operations.UpdateLinodeInstanceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLinodeInstanceResponse>;
    /**
     * updateLongviewClient - Longview Client Update
     *
     * Updates a Longview Client.  This cannot update how it monitors your server; use the Longview Client application on your Linode for monitoring configuration.
     *
    **/
    updateLongviewClient(req: operations.UpdateLongviewClientRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLongviewClientResponse>;
    /**
     * updateLongviewPlan - Longview Plan Update
     *
     * Update your Longview plan to that of the given subcription ID. This returns a `LongviewSubscription` object for the updated Longview Pro plan, or an empty set `{}` if the updated plan is Longview Free.
     *
     * You must have `"longview_subscription": true` configured as a `global` [User Grant](/docs/api/account/#users-grants-view) in order to access this endpoint.
     *
     * You can send a request to the [List Longview Subscriptions](/docs/api/longview/#longview-subscriptions-list) endpoint to receive the details, including `id`'s, of each plan.
     *
    **/
    updateLongviewPlan(req: operations.UpdateLongviewPlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLongviewPlanResponse>;
    /**
     * updateManagedContact - Managed Contact Update
     *
     * Updates information about a Managed Contact.
     *
    **/
    updateManagedContact(req: operations.UpdateManagedContactRequest, config?: AxiosRequestConfig): Promise<operations.UpdateManagedContactResponse>;
    /**
     * updateManagedCredential - Managed Credential Update
     *
     * Updates the label of a Managed Credential. This endpoint does not update the username and password for a Managed Credential. To do this, use the Update Managed Credential Username and Password ([POST /managed/credentials/{credentialId}/update](https://developers.linode.com/api/docs/v4#operation/updateManagedCredentialUsernamePassword)) endpoint instead.
     *
    **/
    updateManagedCredential(req: operations.UpdateManagedCredentialRequest, config?: AxiosRequestConfig): Promise<operations.UpdateManagedCredentialResponse>;
    /**
     * updateManagedCredentialUsernamePassword - Managed Credential Username and Password Update
     *
     * Updates the username and password for a Managed Credential.
     *
    **/
    updateManagedCredentialUsernamePassword(req: operations.UpdateManagedCredentialUsernamePasswordRequest, config?: AxiosRequestConfig): Promise<operations.UpdateManagedCredentialUsernamePasswordResponse>;
    /**
     * updateManagedLinodeSetting - Linode's Managed Settings Update
     *
     * Updates a single Linode's Managed settings.
     *
    **/
    updateManagedLinodeSetting(req: operations.UpdateManagedLinodeSettingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateManagedLinodeSettingResponse>;
    /**
     * updateManagedService - Managed Service Update
     *
     * Updates information about a Managed Service.
     *
    **/
    updateManagedService(req: operations.UpdateManagedServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateManagedServiceResponse>;
    /**
     * updateNodeBalancer - NodeBalancer Update
     *
     * Updates information about a NodeBalancer you can access.
     *
    **/
    updateNodeBalancer(req: operations.UpdateNodeBalancerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNodeBalancerResponse>;
    /**
     * updateNodeBalancerConfig - Config Update
     *
     * Updates the configuration for a single port on a NodeBalancer.
     *
    **/
    updateNodeBalancerConfig(req: operations.UpdateNodeBalancerConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNodeBalancerConfigResponse>;
    /**
     * updateNodeBalancerNode - Node Update
     *
     * Updates information about a Node, a backend for this NodeBalancer's configured port.
     *
    **/
    updateNodeBalancerNode(req: operations.UpdateNodeBalancerNodeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNodeBalancerNodeResponse>;
    /**
     * updateObjectStorageBucketAcl - Object Storage Object ACL Config Update
     *
     * Update an Object's configured Access Control List (ACL) in this Object Storage bucket.
     * ACLs define who can access your buckets and objects and specify the level of access
     * granted to those users.
     *
     *
     * This endpoint is available for convenience. It is recommended that instead you
     * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#set-object-acl) directly.
     *
    **/
    updateObjectStorageBucketAcl(req: operations.UpdateObjectStorageBucketAclRequest, config?: AxiosRequestConfig): Promise<operations.UpdateObjectStorageBucketAclResponse>;
    /**
     * updateObjectStorageBucketAccess - Object Storage Bucket Access Update
     *
     * Allows changing basic Cross-origin Resource Sharing (CORS) and Access Control Level (ACL) settings.
     * Only allows enabling/disabling CORS for all origins, and/or setting canned ACLs.
     *
     *
     * For more fine-grained control of both systems, please use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket-acl) directly.
     *
    **/
    updateObjectStorageBucketAccess(req: operations.UpdateObjectStorageBucketAccessRequest, config?: AxiosRequestConfig): Promise<operations.UpdateObjectStorageBucketAccessResponse>;
    /**
     * updateObjectStorageKey - Object Storage Key Update
     *
     * Updates an Object Storage Key on your account.
     *
    **/
    updateObjectStorageKey(req: operations.UpdateObjectStorageKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateObjectStorageKeyResponse>;
    /**
     * updatePersonalAccessToken - Personal Access Token Update
     *
     * Updates a Personal Access Token.
     *
    **/
    updatePersonalAccessToken(req: operations.UpdatePersonalAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePersonalAccessTokenResponse>;
    /**
     * updateProfile - Profile Update
     *
     * Update information in your Profile.  This endpoint requires the "account:read_write" OAuth Scope.
     *
    **/
    updateProfile(req: operations.UpdateProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProfileResponse>;
    /**
     * updateSshKey - SSH Key Update
     *
     * Updates an SSH Key that you have permission to `read_write`.
     *
    **/
    updateSshKey(req: operations.UpdateSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSshKeyResponse>;
    /**
     * updateStackScript - StackScript Update
     *
     * Updates a StackScript.
     *
     * **Once a StackScript is made public, it cannot be made private.**
     *
    **/
    updateStackScript(req: operations.UpdateStackScriptRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStackScriptResponse>;
    /**
     * updateUser - User Update
     *
     * Update information about a User on your Account. This can be used to change the restricted status of a User. When making a User restricted, no grants will be configured by default and you must then set up grants in order for the User to access anything on the Account.
     *
    **/
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
    /**
     * updateUserGrants - User's Grants Update
     *
     * Update the grants a User has. This can be used to give a User access to new entities or actions, or take access away.  You do not need to include the grant for every entity on the Account in this request; any that are not included will remain unchanged.
     *
    **/
    updateUserGrants(req: operations.UpdateUserGrantsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserGrantsResponse>;
    /**
     * updateUserPreferences - User Preferences Update
     *
     * Updates a user's preferences. These preferences are tied to the OAuth client that generated the token making the request. The user preferences endpoints allow consumers of the API to store arbitrary JSON data, such as a user's font size preference or preferred display name. An account may have multiple preferences. Preferences, and the pertaining request body, may contain any arbitrary JSON data that the user would like to store.
     *
    **/
    updateUserPreferences(req: operations.UpdateUserPreferencesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserPreferencesResponse>;
    /**
     * updateVolume - Volume Update
     *
     * Updates a Volume that you have permission to `read_write`.
     *
    **/
    updateVolume(req: operations.UpdateVolumeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVolumeResponse>;
    /**
     * viewManagedSshKey - Managed SSH Key View
     *
     * Returns the unique SSH public key assigned to your Linode account's Managed service. If you [add this public key](/docs/platform/linode-managed/#adding-the-public-key) to a Linode on your account, Linode special forces will be able to log in to the Linode with this key when attempting to resolve issues.
     *
    **/
    viewManagedSshKey(req: operations.ViewManagedSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.ViewManagedSshKeyResponse>;
    /**
     * viewObjectStorageBucketAcl - Object Storage Object ACL Config View
     *
     * View an Object’s configured Access Control List (ACL) in this Object Storage bucket.
     * ACLs define who can access your buckets and objects and specify the level of access
     * granted to those users.
     *
     *
     * This endpoint is available for convenience. It is recommended that instead you
     * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object-acl) directly.
     *
    **/
    viewObjectStorageBucketAcl(req: operations.ViewObjectStorageBucketAclRequest, config?: AxiosRequestConfig): Promise<operations.ViewObjectStorageBucketAclResponse>;
}
export {};

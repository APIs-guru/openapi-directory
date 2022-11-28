import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServerActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getServersIdActions - Get all Actions for a Server
     *
     * Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
    **/
    getServersIdActions(req: operations.GetServersIdActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetServersIdActionsResponse>;
    /**
     * getServersIdActionsActionId - Get an Action for a Server
     *
     * Returns a specific Action object for a Server.
    **/
    getServersIdActionsActionId(req: operations.GetServersIdActionsActionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetServersIdActionsActionIdResponse>;
    /**
     * postServersIdActionsAddToPlacementGroup - Add a Server to a Placement Group
     *
     * Adds a Server to a Placement Group.
     *
     * Server must be powered off for this command to succeed.
     *
     * #### Call specific error codes
     *
     * | Code                          | Description                                                          |
     * |-------------------------------|----------------------------------------------------------------------|
     * | `server_not_stopped`          | The action requires a stopped server                                 |
     *
    **/
    postServersIdActionsAddToPlacementGroup(req: operations.PostServersIdActionsAddToPlacementGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsAddToPlacementGroupResponse>;
    /**
     * postServersIdActionsAttachIso - Attach an ISO to a Server
     *
     * Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.
     *
     * Servers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.
     *
    **/
    postServersIdActionsAttachIso(req: operations.PostServersIdActionsAttachIsoRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsAttachIsoResponse>;
    /**
     * postServersIdActionsAttachToNetwork - Attach a Server to a Network
     *
     * Attaches a Server to a network. This will complement the fixed public Server interface by adding an additional ethernet interface to the Server which is connected to the specified network.
     *
     * The Server will get an IP auto assigned from a subnet of type `server` in the same `network_zone`.
     *
     * Using the `alias_ips` attribute you can also define one or more additional IPs to the Servers. Please note that you will have to configure these IPs by hand on your Server since only the primary IP will be given out by DHCP.
     *
     * **Call specific error codes**
     *
     * | Code                             | Description                                                           |
     * |----------------------------------|-----------------------------------------------------------------------|
     * | `server_already_attached`        | The server is already attached to the network                         |
     * | `ip_not_available`               | The provided Network IP is not available                              |
     * | `no_subnet_available`            | No Subnet or IP is available for the Server within the network        |
     * | `networks_overlap`               | The network IP range overlaps with one of the server networks         |
     *
    **/
    postServersIdActionsAttachToNetwork(req: operations.PostServersIdActionsAttachToNetworkRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsAttachToNetworkResponse>;
    /**
     * postServersIdActionsChangeAliasIps - Change alias IPs of a Network
     *
     * Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be replaced with these provided in the request body. So if you want to add an alias IP, you have to provide the existing ones from the Network plus the new alias IP in the request body.
    **/
    postServersIdActionsChangeAliasIps(req: operations.PostServersIdActionsChangeAliasIpsRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsChangeAliasIpsResponse>;
    /**
     * postServersIdActionsChangeDnsPtr - Change reverse DNS entry for this Server
     *
     * Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Server.
     *
     * Floating IPs assigned to the Server are not affected by this.
     *
    **/
    postServersIdActionsChangeDnsPtr(req: operations.PostServersIdActionsChangeDnsPtrRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsChangeDnsPtrResponse>;
    /**
     * postServersIdActionsChangeProtection - Change Server Protection
     *
     * Changes the protection configuration of the Server.
    **/
    postServersIdActionsChangeProtection(req: operations.PostServersIdActionsChangeProtectionRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsChangeProtectionResponse>;
    /**
     * postServersIdActionsChangeType - Change the Type of a Server
     *
     * Changes the type (Cores, RAM and disk sizes) of a Server.
     *
     * Server must be powered off for this command to succeed.
     *
     * This copies the content of its disk, and starts it again.
     *
     * You can only migrate to Server types with the same `storage_type` and equal or bigger disks. Shrinking disks is not possible as it might destroy data.
     *
     * If the disk gets upgraded, the Server type can not be downgraded any more. If you plan to downgrade the Server type, set `upgrade_disk` to `false`.
     *
     * #### Call specific error codes
     *
     * | Code                          | Description                                                          |
     * |-------------------------------|----------------------------------------------------------------------|
     * | `invalid_server_type`         | The server type does not fit for the given server or is deprecated   |
     * | `server_not_stopped`          | The action requires a stopped server                                 |
     *
    **/
    postServersIdActionsChangeType(req: operations.PostServersIdActionsChangeTypeRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsChangeTypeResponse>;
    /**
     * postServersIdActionsCreateImage - Create Image from a Server
     *
     * Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.
     *
     * To make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.
     *
     * You can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create an `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.
     *
    **/
    postServersIdActionsCreateImage(req: operations.PostServersIdActionsCreateImageRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsCreateImageResponse>;
    /**
     * postServersIdActionsDetachFromNetwork - Detach a Server from a Network
     *
     * Detaches a Server from a network. The interface for this network will vanish.
    **/
    postServersIdActionsDetachFromNetwork(req: operations.PostServersIdActionsDetachFromNetworkRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsDetachFromNetworkResponse>;
    /**
     * postServersIdActionsDetachIso - Detach an ISO from a Server
     *
     * Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`
    **/
    postServersIdActionsDetachIso(req: operations.PostServersIdActionsDetachIsoRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsDetachIsoResponse>;
    /**
     * postServersIdActionsDisableBackup - Disable Backups for a Server
     *
     * Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backups will be made.
     *
     * Caution: This immediately removes all existing backups for the Server!
     *
    **/
    postServersIdActionsDisableBackup(req: operations.PostServersIdActionsDisableBackupRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsDisableBackupResponse>;
    /**
     * postServersIdActionsDisableRescue - Disable Rescue Mode for a Server
     *
     * Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.
     *
     * Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
     *
     * Disabling rescue mode will not reboot your Server — you will have to do this yourself.
     *
    **/
    postServersIdActionsDisableRescue(req: operations.PostServersIdActionsDisableRescueRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsDisableRescueResponse>;
    /**
     * postServersIdActionsEnableBackup - Enable and Configure Backups for a Server
     *
     * Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.
     *
     * Backups are automatically created daily.
     *
    **/
    postServersIdActionsEnableBackup(req: operations.PostServersIdActionsEnableBackupRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsEnableBackupResponse>;
    /**
     * postServersIdActionsEnableRescue - Enable Rescue Mode for a Server
     *
     * Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a special minimal Linux distribution designed for repair and reinstall.
     *
     * In case a Server cannot boot on its own you can use this to access a Server’s disks.
     *
     * Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
     *
     * Enabling rescue mode will not [reboot](https://docs.hetzner.cloud/#server-actions-soft-reboot-a-server) your Server — you will have to do this yourself.
     *
    **/
    postServersIdActionsEnableRescue(req: operations.PostServersIdActionsEnableRescueRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsEnableRescueResponse>;
    /**
     * postServersIdActionsPoweroff - Power off a Server
     *
     * Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.
    **/
    postServersIdActionsPoweroff(req: operations.PostServersIdActionsPoweroffRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsPoweroffResponse>;
    /**
     * postServersIdActionsPoweron - Power on a Server
     *
     * Starts a Server by turning its power on.
    **/
    postServersIdActionsPoweron(req: operations.PostServersIdActionsPoweronRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsPoweronResponse>;
    /**
     * postServersIdActionsReboot - Soft-reboot a Server
     *
     * Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.
    **/
    postServersIdActionsReboot(req: operations.PostServersIdActionsRebootRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsRebootResponse>;
    /**
     * postServersIdActionsRebuild - Rebuild a Server from an Image
     *
     * Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server
     *
     * The Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.
     *
     * Your Server will automatically be powered off before the rebuild command executes.
     *
    **/
    postServersIdActionsRebuild(req: operations.PostServersIdActionsRebuildRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsRebuildResponse>;
    /**
     * postServersIdActionsRemoveFromPlacementGroup - Remove from Placement Group
     *
     * Removes a Server from a Placement Group.
     *
    **/
    postServersIdActionsRemoveFromPlacementGroup(req: operations.PostServersIdActionsRemoveFromPlacementGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsRemoveFromPlacementGroupResponse>;
    /**
     * postServersIdActionsRequestConsole - Request Console for a Server
     *
     * Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided URL is valid for 1 minute, after this period a new url needs to be created to connect to the Server. How long the connection is open after the initial connect is not subject to this timeout.
    **/
    postServersIdActionsRequestConsole(req: operations.PostServersIdActionsRequestConsoleRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsRequestConsoleResponse>;
    /**
     * postServersIdActionsReset - Reset a Server
     *
     * Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.
    **/
    postServersIdActionsReset(req: operations.PostServersIdActionsResetRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsResetResponse>;
    /**
     * postServersIdActionsResetPassword - Reset root Password of a Server
     *
     * Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (state `on`) in order for this operation to succeed.
     *
     * This will generate a new password for this Server and return it.
     *
     * If this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.
     *
    **/
    postServersIdActionsResetPassword(req: operations.PostServersIdActionsResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsResetPasswordResponse>;
    /**
     * postServersIdActionsShutdown - Shutdown a Server
     *
     * Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI and react to the request, otherwise the Server will not shut down.
    **/
    postServersIdActionsShutdown(req: operations.PostServersIdActionsShutdownRequest, config?: AxiosRequestConfig): Promise<operations.PostServersIdActionsShutdownResponse>;
}

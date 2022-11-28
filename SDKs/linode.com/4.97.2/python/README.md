# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetNodebalancersNodeBalancerIDStatsRequest(
    security=operations.GetNodebalancersNodeBalancerIDStatsSecurity(
        personal_access_token=shared.SchemePersonalAccessToken(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    path_params=operations.GetNodebalancersNodeBalancerIDStatsPathParams(
        node_balancer_id=3984540232369756754,
    ),
)
    
res = s.sdk.get_nodebalancers_node_balancer_id_stats(req)

if res.node_balancer_stats is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `get_nodebalancers_node_balancer_id_stats` - NodeBalancer Statistics View
* `post_images_upload` - Image Upload
* `accept_entity_transfer` - Entity Transfer Accept
* `accept_service_transfer` - Service Transfer Accept
* `add_linode_config` - Configuration Profile Create
* `add_linode_disk` - Disk Create
* `add_linode_ip` - IPv4 Address Allocate
* `add_ssh_key` - SSH Key Add
* `add_stack_script` - StackScript Create
* `allocate_ip` - IP Address Allocate
* `assign_i_ps` - Linodes Assign IPs
* `attach_volume` - Volume Attach
* `boot_linode_instance` - Linode Boot
* `cancel_account` - Account Cancel
* `cancel_backups` - Backups Cancel
* `cancel_object_storage` - Object Storage Cancel
* `clone_domain` - Domain Clone
* `clone_linode_disk` - Disk Clone
* `clone_linode_instance` - Linode Clone
* `clone_volume` - Volume Clone
* `close_ticket` - Support Ticket Close
* `create_client` - OAuth Client Create
* `create_credit_card` - Credit Card Add/Edit
* `create_domain` - Domain Create
* `create_domain_record` - Domain Record Create
* `create_entity_transfer` - Entity Transfer Create
* `create_firewall_device` - Firewall Device Create
* `create_firewalls` - Firewall Create
* `create_image` - Image Create
* `create_lke_cluster` - Kubernetes Cluster Create
* `create_linode_instance` - Linode Create
* `create_longview_client` - Longview Client Create
* `create_managed_contact` - Managed Contact Create
* `create_managed_credential` - Managed Credential Create
* `create_managed_service` - Managed Service Create
* `create_node_balancer` - NodeBalancer Create
* `create_node_balancer_config` - Config Create
* `create_node_balancer_node` - Node Create
* `create_object_storage_bucket` - Object Storage Bucket Create
* `create_object_storage_keys` - Object Storage Key Create
* `create_object_storage_object_url` - Object Storage Object URL Create
* `create_object_storage_ssl` - Object Storage TLS/SSL Cert Upload
* `create_pay_pal_payment` - PayPal Payment Stage
* `create_payment` - Payment Make
* `create_payment_method` - Payment Method Add
* `create_personal_access_token` - Personal Access Token Create
* `create_promo_credit` - Promo Credit Add
* `create_service_transfer` - Service Transfer Create
* `create_snapshot` - Snapshot Create
* `create_tag` - New Tag Create
* `create_ticket` - Support Ticket Open
* `create_ticket_attachment` - Ticket Attachment Create
* `create_ticket_reply` - Reply Create
* `create_user` - User Create
* `create_volume` - Volume Create
* `delete_client` - OAuth Client Delete
* `delete_disk` - Disk Delete
* `delete_domain` - Domain Delete
* `delete_domain_record` - Domain Record Delete
* `delete_entity_transfer` - Entity Transfer Cancel
* `delete_firewall` - Firewall Delete
* `delete_firewall_device` - Firewall Device Delete
* `delete_image` - Image Delete
* `delete_lke_cluster` - Kubernetes Cluster Delete
* `delete_lke_cluster_node` - Node Delete
* `delete_lke_node_pool` - Node Pool Delete
* `delete_linode_config` - Configuration Profile Delete
* `delete_linode_instance` - Linode Delete
* `delete_longview_client` - Longview Client Delete
* `delete_managed_contact` - Managed Contact Delete
* `delete_managed_credential` - Managed Credential Delete
* `delete_managed_service` - Managed Service Delete
* `delete_node_balancer` - NodeBalancer Delete
* `delete_node_balancer_config` - Config Delete
* `delete_node_balancer_config_node` - Node Delete
* `delete_object_storage_bucket` - Object Storage Bucket Remove
* `delete_object_storage_key` - Object Storage Key Revoke
* `delete_object_storage_ssl` - Object Storage TLS/SSL Cert Delete
* `delete_personal_access_token` - Personal Access Token Revoke
* `delete_profile_app` - App Access Revoke
* `delete_ssh_key` - SSH Key Delete
* `delete_service_transfer` - Service Transfer Cancel
* `delete_stack_script` - StackScript Delete
* `delete_tag` - Tag Delete
* `delete_user` - User Delete
* `delete_volume` - Volume Delete
* `detach_volume` - Volume Detach
* `disable_managed_service` - Managed Service Disable
* `enable_account_manged` - Linode Managed Enable
* `enable_backups` - Backups Enable
* `enable_managed_service` - Managed Service Enable
* `event_read` - Event Mark as Read
* `event_seen` - Event Mark as Seen
* `execute_pay_pal_payment` - Staged/Approved PayPal Payment Execute
* `get_account` - Account View
* `get_account_login` - Login View
* `get_account_logins` - User Logins List All
* `get_account_settings` - Account Settings View
* `get_backup` - Backup View
* `get_backups` - Backups List
* `get_client` - OAuth Client View
* `get_client_thumbnail` - OAuth Client Thumbnail View
* `get_clients` - OAuth Clients List
* `get_devices` - Trusted Devices List
* `get_domain` - Domain View
* `get_domain_record` - Domain Record View
* `get_domain_records` - Domain Records List
* `get_domain_zone` - Domain Zone File View
* `get_domains` - Domains List
* `get_entity_transfer` - Entity Transfer View
* `get_entity_transfers` - Entity Transfers List
* `get_event` - Event View
* `get_events` - Events List
* `get_firewall` - Firewall View
* `get_firewall_device` - Firewall Device View
* `get_firewall_devices` - Firewall Devices List
* `get_firewall_rules` - Firewall Rules List
* `get_firewalls` - Firewalls List
* `get_ip` - IP Address View
* `get_i_ps` - IP Addresses List
* `get_i_pv6_pools` - IPv6 Pools List
* `get_i_pv6_ranges` - IPv6 Ranges List
* `get_image` - Image View
* `get_images` - Images List
* `get_invoice` - Invoice View
* `get_invoice_items` - Invoice Items List
* `get_invoices` - Invoices List
* `get_kernel` - Kernel View
* `get_kernels` - Kernels List
* `get_lke_cluster` - Kubernetes Cluster View
* `get_lke_cluster_api_endpoints` - Kubernetes API Endpoints List
* `get_lke_cluster_kubeconfig` - Kubeconfig View
* `get_lke_cluster_node` - Node View
* `get_lke_cluster_pools` - Node Pools List
* `get_lke_clusters` - Kubernetes Clusters List
* `get_lke_node_pool` - Node Pool View
* `get_lke_version` - Kubernetes Version View
* `get_lke_versions` - Kubernetes Versions List
* `get_linode_config` - Configuration Profile View
* `get_linode_configs` - Configuration Profiles List
* `get_linode_disk` - Disk View
* `get_linode_disks` - Disks List
* `get_linode_firewalls` - Firewalls List
* `get_linode_ip` - IP Address View
* `get_linode_i_ps` - Networking Information List
* `get_linode_instance` - Linode View
* `get_linode_instances` - Linodes List
* `get_linode_stats` - Linode Statistics View
* `get_linode_stats_by_year_month` - Statistics View (year/month)
* `get_linode_transfer` - Network Transfer View
* `get_linode_transfer_by_year_month` - Network Transfer View (year/month)
* `get_linode_type` - Type View
* `get_linode_types` - Types List
* `get_linode_volumes` - Linode's Volumes List
* `get_longview_client` - Longview Client View
* `get_longview_clients` - Longview Clients List
* `get_longview_plan` - Longview Plan View
* `get_longview_subscription` - Longview Subscription View
* `get_longview_subscriptions` - Longview Subscriptions List
* `get_maintenance` - Maintenance List
* `get_managed_contact` - Managed Contact View
* `get_managed_contacts` - Managed Contacts List
* `get_managed_credential` - Managed Credential View
* `get_managed_credentials` - Managed Credentials List
* `get_managed_issue` - Managed Issue View
* `get_managed_issues` - Managed Issues List
* `get_managed_linode_setting` - Linode's Managed Settings View
* `get_managed_linode_settings` - Managed Linode Settings List
* `get_managed_service` - Managed Service View
* `get_managed_services` - Managed Services List
* `get_managed_stats` - Managed Stats List
* `get_node_balancer` - NodeBalancer View
* `get_node_balancer_config` - Config View
* `get_node_balancer_config_nodes` - Nodes List
* `get_node_balancer_configs` - Configs List
* `get_node_balancer_node` - Node View
* `get_node_balancers` - NodeBalancers List
* `get_notifications` - Notifications List
* `get_object_storage_bucket` - Object Storage Bucket View
* `get_object_storage_bucket_content` - Object Storage Bucket Contents List
* `get_object_storage_bucketin_cluster` - Object Storage Buckets in Cluster List
* `get_object_storage_buckets` - Object Storage Buckets List
* `get_object_storage_cluster` - Cluster View
* `get_object_storage_clusters` - Clusters List
* `get_object_storage_key` - Object Storage Key View
* `get_object_storage_keys` - Object Storage Keys List
* `get_object_storage_ssl` - Object Storage TLS/SSL Cert View
* `get_object_storage_transfer` - Object Storage Transfer View
* `get_payment` - Payment View
* `get_payment_methods` - Payment Methods List
* `get_payments` - Payments List
* `get_personal_access_token` - Personal Access Token View
* `get_personal_access_tokens` - Personal Access Tokens List
* `get_profile` - Profile View
* `get_profile_app` - Authorized App View
* `get_profile_apps` - Authorized Apps List
* `get_profile_grants` - Grants List
* `get_profile_login` - Login View
* `get_profile_logins` - Logins List
* `get_region` - Region View
* `get_regions` - Regions List
* `get_ssh_key` - SSH Key View
* `get_ssh_keys` - SSH Keys List
* `get_service_transfer` - Service Transfer View
* `get_service_transfers` - Service Transfers List
* `get_stack_script` - StackScript View
* `get_stack_scripts` - StackScripts List
* `get_tagged_objects` - Tagged Objects List
* `get_tags` - Tags List
* `get_ticket` - Support Ticket View
* `get_ticket_replies` - Replies List
* `get_tickets` - Support Tickets List
* `get_transfer` - Network Utilization View
* `get_trusted_device` - Trusted Device View
* `get_user` - User View
* `get_user_grants` - User's Grants View
* `get_user_preferences` - User Preferences View
* `get_users` - Users List
* `get_vla_ns` - VLANs List
* `get_volume` - Volume View
* `get_volumes` - Volumes List
* `import_domain` - Domain Import
* `migrate_linode_instance` - DC Migration/Pending Host Migration Initiate
* `modify_object_storage_bucket_access` - Object Storage Bucket Access Modify
* `mutate_linode_instance` - Linode Upgrade
* `post_lke_cluster_node_recycle` - Node Recycle
* `post_lke_cluster_pool_recycle` - Node Pool Recycle
* `post_lke_cluster_pools` - Node Pool Create
* `post_lke_cluster_recycle` - Cluster Nodes Recycle
* `put_lke_cluster` - Kubernetes Cluster Update
* `put_lke_node_pool` - Node Pool Update
* `reboot_linode_instance` - Linode Reboot
* `rebuild_linode_instance` - Linode Rebuild
* `rebuild_node_balancer_config` - Config Rebuild
* `remove_linode_ip` - IPv4 Address Delete
* `rescue_linode_instance` - Linode Boot into Rescue Mode
* `reset_client_secret` - OAuth Client Secret Reset
* `reset_disk_password` - Disk Root Password Reset
* `reset_linode_password` - Linode Root Password Reset
* `resize_disk` - Disk Resize
* `resize_linode_instance` - Linode Resize
* `resize_volume` - Volume Resize
* `restore_backup` - Backup Restore
* `revoke_trusted_device` - Trusted Device Revoke
* `set_client_thumbnail` - OAuth Client Thumbnail Update
* `share_i_ps` - IP Sharing Configure
* `shutdown_linode_instance` - Linode Shut Down
* `tfa_confirm` - Two Factor Authentication Confirm/Enable
* `tfa_disable` - Two Factor Authentication Disable
* `tfa_enable` - Two Factor Secret Create
* `update_account` - Account Update
* `update_account_settings` - Account Settings Update
* `update_client` - OAuth Client Update
* `update_disk` - Disk Update
* `update_domain` - Domain Update
* `update_domain_record` - Domain Record Update
* `update_firewall` - Firewall Update
* `update_firewall_rules` - Firewall Rules Update
* `update_ip` - IP Address RDNS Update
* `update_image` - Image Update
* `update_linode_config` - Configuration Profile Update
* `update_linode_ip` - IP Address Update
* `update_linode_instance` - Linode Update
* `update_longview_client` - Longview Client Update
* `update_longview_plan` - Longview Plan Update
* `update_managed_contact` - Managed Contact Update
* `update_managed_credential` - Managed Credential Update
* `update_managed_credential_username_password` - Managed Credential Username and Password Update
* `update_managed_linode_setting` - Linode's Managed Settings Update
* `update_managed_service` - Managed Service Update
* `update_node_balancer` - NodeBalancer Update
* `update_node_balancer_config` - Config Update
* `update_node_balancer_node` - Node Update
* `update_object_storage_bucket_acl` - Object Storage Object ACL Config Update
* `update_object_storage_bucket_access` - Object Storage Bucket Access Update
* `update_object_storage_key` - Object Storage Key Update
* `update_personal_access_token` - Personal Access Token Update
* `update_profile` - Profile Update
* `update_ssh_key` - SSH Key Update
* `update_stack_script` - StackScript Update
* `update_user` - User Update
* `update_user_grants` - User's Grants Update
* `update_user_preferences` - User Preferences Update
* `update_volume` - Volume Update
* `view_managed_ssh_key` - Managed SSH Key View
* `view_object_storage_bucket_acl` - Object Storage Object ACL Config View

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
